import React, { useState } from "react";
import { storiesOf } from "@storybook/react-native";
import { View, Button, Text } from "react-native";
import PopMenuButton from "./PopMenuButton";

const PopModalShowcase = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const options = [
    {
      label: "report",
      onPress: () => console.log("pressed report"),
      textColor: "red",
    },
    {
      label: "copy link",
      onPress: () => console.log("copied to clipboard"),
      textColor: "black",
    },
  ];
  return (
    <>
      <Button title="Open Menu" onPress={() => setModalVisible(true)} />
      <PopMenuButton
        options={options}
        onHide={() => setModalVisible(false)}
        visible={modalVisible}
      />
    </>
  );
};

storiesOf("PopMenuButton", module)
  .addDecorator(getStory => (
    <View style={{ width: "100%", flex: 1 }}>{getStory()}</View>
  ))
  .add("Default", () => <PopModalShowcase />);
