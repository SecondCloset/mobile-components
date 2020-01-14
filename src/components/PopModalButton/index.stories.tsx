import React from "react";
import { storiesOf } from "@storybook/react-native";
import CenterView from "../CenterView";
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
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add("Default", () => <PopModalButton options={options} fontSize={25} />);
