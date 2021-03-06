import React, { useState, useEffect, useRef } from "react";
import { Modal } from "react-native";
import { Camera } from "expo-camera";
import * as ImageManipulator from "expo-image-manipulator";
import { DeviceMotion } from "expo-sensors";
import { AntDesign } from "@expo/vector-icons";

import {
  Container,
  CloseButton,
  ErrorMessageWrap,
  ErrorMessageText,
  Footer,
  SnapButtonWrap,
  SnapButtonInnerWrap,
} from "./styles";

interface CameraShootModalProps {
  visible: boolean;
  imageCompressed?: boolean;
  onHide: () => any;
  onSnap: (photo: string) => any;
}

interface Subscriptions {
  remove: () => void;
}

//helpers
const orientationCalculation = (deviceMotion) => {
  // ref: https://github.com/expo/expo/issues/2430

  const gamma = Number(deviceMotion?.rotation?.gamma || 0).toFixed(2);
  const beta = Number(deviceMotion?.rotation?.beta || 0).toFixed(2);
  let ABSOLUTE_GAMMA = Math.abs(+gamma);
  let ABSOLUTE_BETA = Math.abs(+beta);
  let isGammaNegative = Math.sign(+gamma) === -1;
  let orientation = 0;

  if (ABSOLUTE_GAMMA <= 0.04 && ABSOLUTE_BETA <= 0.24) {
    //Portrait mode, on a flat surface.
    orientation = 0;
  } else if (
    (ABSOLUTE_GAMMA <= 1.0 || ABSOLUTE_GAMMA >= 2.3) &&
    ABSOLUTE_BETA >= 0.5
  ) {
    //General Portrait mode, accounting for forward and back tilt on the top of the phone.
    orientation = 0;
  } else {
    if (isGammaNegative) {
      //Landscape mode with the top of the phone to the left.
      orientation = -90;
    } else {
      //Landscape mode with the top of the phone to the right.
      orientation = 90;
    }
  }
  return orientation;
};

/**
 *
 * @param imageCompressed setting to false is not recommended as the file size can get very big
 *
 */
const CameraShootModal: React.FC<CameraShootModalProps> = ({
  visible,
  imageCompressed = true,
  onHide,
  onSnap,
}) => {
  const [hasPermission, setHasPermission] = useState(false);
  const [deviceOrientation, setDeviceOrientation] = useState(0);
  const [listener, setListener] = useState<Subscriptions>();
  const camera = useRef<Camera>(null);

  const imageQuality = imageCompressed ? 0.5 : 1; // 1 is original, 0 is the lowest quality

  const onMotionChange = (motion) => {
    const orientation = orientationCalculation(motion);
    setDeviceOrientation(orientation);
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
      const isAvailable = await DeviceMotion.isAvailableAsync();
      if (isAvailable) setListener(DeviceMotion.addListener(onMotionChange));
    })();
    return () => listener?.remove();
  }, []);

  const renderErrorMessage = (error: string) => {
    return (
      <ErrorMessageWrap>
        <ErrorMessageText>{error}</ErrorMessageText>
      </ErrorMessageWrap>
    );
  };

  if (hasPermission === undefined) {
    return renderErrorMessage("Requesting for camera permission");
  }
  if (hasPermission === false) {
    return renderErrorMessage("No access to camera");
  }

  const onPhotoSnap = async () => {
    if (camera.current) {
      let photo = await camera.current.takePictureAsync();
      const uri = photo?.uri;
      photo = await ImageManipulator.manipulateAsync(
        uri,
        [{ rotate: deviceOrientation }],
        {
          compress: imageQuality,
        }
      );
      onSnap(photo?.uri || "");
      onHide();
    }
  };

  const renderFooter = () => {
    return (
      <Footer>
        <SnapButtonWrap onPress={onPhotoSnap}>
          <SnapButtonInnerWrap />
        </SnapButtonWrap>
      </Footer>
    );
  };

  return (
    <Modal visible={visible} animationType="slide">
      <Camera style={{ width: "100%", flex: 1 }} type="back" ref={camera}>
        <Container>
          <CloseButton onPress={onHide}>
            <AntDesign name="close" size={32} color="white" />
          </CloseButton>
        </Container>
      </Camera>
      {renderFooter()}
    </Modal>
  );
};

export default CameraShootModal;
