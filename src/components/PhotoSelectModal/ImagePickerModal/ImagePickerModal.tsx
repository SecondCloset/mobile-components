import React, { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { Container, LoadingText } from "./styles";
import { Alert, ActivityIndicator, Modal } from "react-native";
import * as ImageManipulator from "expo-image-manipulator";
interface ImagePickerModalProps {
  visible: boolean;
  imageCompressed?: boolean;
  onHide: () => any;
  onSelect: (photoUri: string) => any;
}

/**
 *
 * @param imageCompressed setting to false is not recommended as the file size can get very big
 *
 */
const ImagePickerModal: React.FC<ImagePickerModalProps> = ({
  visible,
  imageCompressed = true,
  onHide,
  onSelect,
}) => {
  const launchImageLibraryAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      if (!imageCompressed) {
        onSelect(result.uri);
      } else {
        const compressedPhoto = await ImageManipulator.manipulateAsync(
          result.uri,
          [],
          {
            compress: 0.6, // 1 is original, 0 is the lowest quality
          }
        );
        onSelect(compressedPhoto?.uri ?? "");
      }
    }

    onHide();
  };

  useEffect(() => {
    if (visible) {
      setTimeout(async () => {
        await launchImageLibraryAsync();
      }, 1000);
    }
  }, [visible]);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
      const isGranted = status === "granted";
      if (!isGranted) {
        Alert.alert(
          "Sorry, we need camera roll permissions to make this work!"
        );
        onHide();
        return;
      }
    })();
  }, []);

  return (
    <Modal visible={visible} transparent={true}>
      <Container>
        <ActivityIndicator color="white" />
        <LoadingText>Loading your gallery..</LoadingText>
      </Container>
    </Modal>
  );
};

export default ImagePickerModal;
