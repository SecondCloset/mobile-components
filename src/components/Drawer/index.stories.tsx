import React, { useState } from "react";
import { storiesOf } from "@storybook/react-native";
import { View, SafeAreaView, Button, Text } from "react-native";
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
        <SafeAreaView
          style={{
            backgroundColor: "#ffffe0",
            flex: 1,
            width: "100%",
          }}
        >
          <Text>Hello World!</Text>
        </SafeAreaView>
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
  .add("Open from left", () => <DrawerShowcase direction="left" />);
