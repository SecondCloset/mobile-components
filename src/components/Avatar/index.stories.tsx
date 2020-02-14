import React from "react";
import { storiesOf } from "@storybook/react-native";
import CenterView from "../CenterView";
import Avatar from "./Avatar";

storiesOf("Avatar", module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add("Default", () => <Avatar firstName="Baby" lastName="Jesus" />)
  .add("With Name", () => (
    <Avatar withName firstName="Anthony" lastName="Langford" />
  ))
  .add("With Explicit Colour", () => (
    <Avatar
      withName
      firstName="Anthony"
      lastName="Langford"
      color="cornflowerblue"
    />
  ))
  .add("With Different Size and FontSize", () => (
    <Avatar
      withName
      firstName="Anthony"
      lastName="Langford"
      color="cornflowerblue"
      size={100}
      fontSize={30}
    />
  ));
