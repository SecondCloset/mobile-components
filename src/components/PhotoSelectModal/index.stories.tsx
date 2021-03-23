import React, { useState } from "react";
import { storiesOf } from "@storybook/react-native";
import { View, TouchableOpacity, Text, Image } from "react-native";
import PhotoSelectModal from "./PhotoSelectModal";

const PhotoSelectModalShowcase = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [imageURI, setImageURI] = useState("");

  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 50,
      }}
    >
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
        onSelectPhoto={setImageURI}
      />
    </View>
  );
};

storiesOf("PhotoSelectModal", module).add("default", () => (
  <PhotoSelectModalShowcase />
));
