import React from "react";
import { storiesOf } from "@storybook/react-native";
import { View, Text } from "react-native";
import Collapse from "../../../src/components/Collapse";
import CenterView from "../../../src/components/CenterView";

const CollapseShowcase = () => {
  const renderTriggerButton = () => {
    return <Text>open</Text>;
  };

  const renderContent = () => {
    return (
      <View
        style={{
          width: "100%",
          padding: 5,
          borderColor: "black",
          borderWidth: 1,
        }}
      >
        <Text>Content</Text>
        <Text>Content</Text>
        <Text>Content</Text>
        <Text>Content</Text>
        <Text>Content</Text>
      </View>
    );
  };
  return (
    <Collapse triggerElement={renderTriggerButton()} defaultOpen>
      {renderContent()}
    </Collapse>
  );
};

storiesOf("Collapse", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Default", () => <CollapseShowcase />);
