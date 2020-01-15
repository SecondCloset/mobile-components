import React from "react";
import { storiesOf } from "@storybook/react-native";
import { View } from "react-native";
import PopModalButton from "./PopModalButton";

const options = [
  {
    label: "report",
    onPress: () => console.log("pressed report"),
    textColor: "red",
  },
  {
    label: "copy link",
    onPress: () => console.log("copied to clipboard"),
    textColor: "black",
  },
];

storiesOf("PopModalButton", module)
  .addDecorator(getStory => (
    <View style={{ width: "100%", flex: 1 }}>{getStory()}</View>
  ))
  .add("Default", () => <PopModalButton options={options} fontSize={25} />);
