import React from "react";
import { storiesOf } from "@storybook/react-native";
import { View, Text } from "react-native";
import Step from "./Step";

const StepShowcase = props => {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        padding: 20,
      }}
    >
      <Step title="Step One" completed>
        <Text>This is step 1</Text>
      </Step>
      <Step title="Step Two">
        <Text>This is step 2</Text>
      </Step>
      <Step title="Step Three" isLast>
        <Text>This is step 3</Text>
      </Step>
    </View>
  );
};

storiesOf("Step", module).add("default", () => <StepShowcase />);
