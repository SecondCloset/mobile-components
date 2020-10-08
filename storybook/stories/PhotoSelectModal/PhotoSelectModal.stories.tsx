import React, { useState } from "react";
import { storiesOf } from "@storybook/react-native";
import { View, TouchableOpacity, Text, Image } from "react-native";
import PhotoSelectModal from "../../../src/components/PhotoSelectModal";
import CenterView from "../../../src/components/CenterView";

const PhotoSelectModalShowcase = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [imageURI, setImageURI] = useState<string>();

  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text>Select Photo</Text>
      </TouchableOpacity>

      {imageURI && (
        <Image
          source={{ uri: imageURI }}
          style={{ width: "100%", height: 200 }}
        />
      )}

      <PhotoSelectModal
        visible={modalVisible}
        onHide={() => setModalVisible(false)}
        onSelectPhoto={(uri) => setImageURI(uri)}
      />
    </View>
  );
};

storiesOf("PhotoSelectModal", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("default", () => <PhotoSelectModalShowcase />);
