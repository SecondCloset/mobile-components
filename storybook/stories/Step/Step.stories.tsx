import React from "react";
import { storiesOf } from "@storybook/react-native";
import { Text, View } from "react-native";
import Step from "../../../src/components/Step";
import CenterView from "../../../src/components/CenterView";

const StepShowcase = () => {
  return (
    <View>
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
