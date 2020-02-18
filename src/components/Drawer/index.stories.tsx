import React, { useState } from "react";
import { storiesOf } from "@storybook/react-native";
import { View, Button, Text } from "react-native";
import Drawer from "./Drawer";

const DrawerShowcase = props => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Button title="Open Drawer" onPress={() => setModalVisible(true)} />
      <Drawer
        onHide={() => setModalVisible(false)}
        visible={modalVisible}
        {...props}
      >
        <Text>Hello World!</Text>
      </Drawer>
    </>
  );
};

storiesOf("Drawer", module)
  .addDecorator(getStory => (
    <View style={{ width: "100%", flex: 1 }}>{getStory()}</View>
  ))
  .add("Full width", () => <DrawerShowcase />)
  .add("80% width", () => <DrawerShowcase width="80%" />)
  .add("Open from left", () => <DrawerShowcase direction="left" />)
  .add("With Background Color", () => (
    <DrawerShowcase backgroundColor="#ffffe0" />
  ));
