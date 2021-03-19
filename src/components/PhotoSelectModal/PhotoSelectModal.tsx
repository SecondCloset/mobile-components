import React, { useState } from "react";
import COLORS from "../../styles/colors";
import BottomUpMenu from "../BottomUpMenu";
import CameraShootModal from "./CameraShootModal";
import ImagePickerModal from "./ImagePickerModal";

interface PhotoSelectModalProps {
  visible: boolean;
  imageCompressed?: boolean;
  onHide: () => any;
  onSelectPhoto: (photoUri: string) => any;
}

/**
 *
 * @param imageCompressed setting to false is not recommended as the file size can get very big
 *
 */
const PhotoSelectModal: React.FC<PhotoSelectModalProps> = ({
  visible,
  imageCompressed = true,
  onHide,
  onSelectPhoto,
}) => {
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
      <BottomUpMenu options={options} visible={visible} onHide={onHide} />
      <CameraShootModal
        visible={cameraShootModalVisible}
        imageCompressed={imageCompressed}
        onHide={() => setCameraShootModalVisible(false)}
        onSnap={(uri) => onSelectPhoto(uri)}
      />

      <ImagePickerModal
        visible={imagePickerVisible}
        imageCompressed={imageCompressed}
        onHide={() => setImagePickerVisible(false)}
        onSelect={(uri) => onSelectPhoto(uri)}
      />
    </>
  );
};

export default PhotoSelectModal;
