import React from "react";
import { storiesOf } from "@storybook/react-native";
import TapAndHoldButton from "./index";

storiesOf("TapAndHoldButton", module).add("default", () => {
  const onComplete = () => {
    alert("Complete");
  };
  return (
    <TapAndHoldButton
      onCompletePress={onComplete}
      initialText="Tap and Hold to Confirm Delivery"
      completedText="Clock Out"
    />
  );
});
