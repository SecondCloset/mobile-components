import React, { useState } from "react";
import { storiesOf } from "@storybook/react-native";
import { Button, Text } from "react-native";
import Drawer from "../../../src/components/Drawer";
import CenterView from "../../../src/components/CenterView";

const DrawerShowcase = (props) => {
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
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Full width", () => <DrawerShowcase />)
  .add("80% width", () => <DrawerShowcase width="80%" />)
  .add("Open from left", () => <DrawerShowcase direction="left" />)
  .add("With Background Color", () => (
    <DrawerShowcase backgroundColor="#ffffe0" />
  ));
