import React, { useState } from "react";
import { storiesOf } from "@storybook/react-native";
import { Button, Text } from "react-native";
import BottomUpModal from "../../../src/components/BottomUpModal";
import CenterView from "../../../src/components/CenterView";

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
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Default", () => <BottomUpModalShowcase />);
