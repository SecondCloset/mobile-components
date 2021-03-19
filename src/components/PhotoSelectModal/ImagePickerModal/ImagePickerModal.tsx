import React, { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { Container, LoadingText } from "./styles";
import { Alert, ActivityIndicator, Modal } from "react-native";

interface ImagePickerModalProps {
  visible: boolean;
  onHide: () => any;
  onSelect: (photoUri: string) => any;
}

const ImagePickerModal: React.FC<ImagePickerModalProps> = ({
  visible,
  onHide,
  onSelect,
}) => {
  const launchImageLibraryAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) onSelect(result.uri);
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
