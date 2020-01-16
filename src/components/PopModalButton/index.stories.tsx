import React, { useState } from "react";
import { storiesOf } from "@storybook/react-native";
import { View, Button, Text } from "react-native";
import PopModalButton from "./PopModalButton";

const PopModalShowcase = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Button title="Open Modal" onPress={() => setModalVisible(true)} />
      <PopModalButton
        onHide={() => setModalVisible(false)}
        visible={modalVisible}
      >
        <Text>hi</Text>
        <Text>hi</Text>
        <Text>hi</Text>
        <Text>hi</Text>
        <Text>hi</Text>
      </PopModalButton>
    </>
  );
};

storiesOf("PopModalButton", module)
  .addDecorator(getStory => (
    <View style={{ width: "100%", flex: 1 }}>{getStory()}</View>
  ))
  .add("Default", () => <PopModalShowcase />);
