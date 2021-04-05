import React from "react";
import { storiesOf } from "@storybook/react-native";
import TapAndHoldButton from "./index";

storiesOf("TapAndHoldButton", module).add("default", () => {
  return (
    <TapAndHoldButton
      onCompletePress={() => alert("Complete")}
      initialText="Tap and Hold to Confirm Delivery"
      completedText="Clock Out"
    />
  );
});
