import React, { useState } from "react";
import { storiesOf } from "@storybook/react-native";
import { View, Button, Text } from "react-native";
import BottomUpModal from "./BottomUpModal";

const BottomUpModalShowcase = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Button title="Open Modal" onPress={() => setModalVisible(true)} />
      <BottomUpModal
        onHide={() => setModalVisible(false)}
        visible={modalVisible}
      >
        <Text>hi</Text>
        <Text>hi</Text>
        <Text>hi</Text>
        <Text>hi</Text>
        <Text>hi</Text>
      </BottomUpModal>
    </>
  );
};

storiesOf("BottomUpModal", module)
  .addDecorator(getStory => (
    <View style={{ width: "100%", flex: 1 }}>{getStory()}</View>
  ))
  .add("Default", () => <BottomUpModalShowcase />);
