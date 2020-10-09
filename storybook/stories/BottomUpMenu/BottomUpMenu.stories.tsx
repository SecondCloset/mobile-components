import React, { useState } from "react";
import { storiesOf } from "@storybook/react-native";
import { Button, View } from "react-native";
import BottomUpMenu from "../../../src/components/BottomUpMenu";
import CenterView from "../../../src/components/CenterView";

const BottomUpModalShowcase = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const options = [
    {
      label: "Report",
      onPress: () => console.log("pressed report"),
      textColor: "red",
    },
    {
      label: "Copy Link",
      onPress: () => console.log("copied to clipboard"),
      textColor: "black",
    },
  ];

  return (
    <>
      <Button title="Open Menu" onPress={() => setModalVisible(true)} />
      <BottomUpMenu
        options={options}
        onHide={() => setModalVisible(false)}
        visible={modalVisible}
      />
    </>
  );
};

storiesOf("BottomUpMenu", module)
  .addDecorator((getStory) => (
    <View style={{ width: "100%", height: "100%", justifyContent: "center" }}>
      {getStory()}
    </View>
  ))
  .add("Default", () => <BottomUpModalShowcase />);
