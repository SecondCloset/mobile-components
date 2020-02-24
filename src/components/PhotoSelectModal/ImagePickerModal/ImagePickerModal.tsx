import React, { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { Container, LoadingText } from "./styles";
import { Alert, ActivityIndicator, Modal } from "react-native";

interface ImagePickerModalProps {
  visible: boolean;
  onHide: () => any;
  onSelect: (photoUri: string) => any;
}

const ImagePickerModal: React.FC<ImagePickerModalProps> = props => {
  const launchImageLibraryAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });
    if (!result.cancelled) props.onSelect(result.uri);
    props.onHide();
  };

  useEffect(() => {
    if (props.visible) {
      setTimeout(async () => {
        await launchImageLibraryAsync();
      }, 1000);
    }
  }, [props.visible]);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
      const isGranted = status === "granted";
      if (!isGranted) {
        Alert.alert(
          "Sorry, we need camera roll permissions to make this work!"
        );
        props.onHide();
        return;
      }
    })();
  }, []);

  return (
    <Modal visible={props.visible} transparent={true}>
      <Container>
        <ActivityIndicator color="white" />
        <LoadingText>Loading your gallery..</LoadingText>
      </Container>
    </Modal>
  );
};

export default ImagePickerModal;
