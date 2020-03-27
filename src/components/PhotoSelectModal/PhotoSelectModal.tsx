import React, { useState } from "react";
import COLORS from "../../styles/colors";
import BottomUpMenu from "../BottomUpMenu";
import CameraShootModal from "./CameraShootModal";
import ImagePickerModal from "./ImagePickerModal";

interface PhotoSelectModalProps {
  visible: boolean;
  onHide: () => any;
  onSelectPhoto: (photoUri: string) => any;
}

const PhotoSelectModal: React.FC<PhotoSelectModalProps> = props => {
  const [cameraShootModalVisible, setCameraShootModalVisible] = useState(false);
  const [imagePickerVisible, setImagePickerVisible] = useState(false);

  const options = [
    {
      label: "Take Photo",
      onPress: () => setCameraShootModalVisible(true),
      textColor: COLORS.BLUE,
    },
    {
      label: "Choose From Gallery",
      onPress: () => setImagePickerVisible(true),
      textColor: COLORS.BLUE,
    },
  ];

  return (
    <>
      <BottomUpMenu
        options={options}
        visible={props.visible}
        onHide={props.onHide}
      />
      <CameraShootModal
        visible={cameraShootModalVisible}
        onHide={() => setCameraShootModalVisible(false)}
        onSnap={uri => props.onSelectPhoto(uri)}
      />

      <ImagePickerModal
        visible={imagePickerVisible}
        onHide={() => setImagePickerVisible(false)}
        onSelect={uri => props.onSelectPhoto(uri)}
      />
    </>
  );
};

export default PhotoSelectModal;
