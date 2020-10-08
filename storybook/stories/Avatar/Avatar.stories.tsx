import React from "react";
import { storiesOf } from "@storybook/react-native";
import CenterView from "../../../src/components/CenterView";
import Avatar from "../../../src/components/Avatar";

storiesOf("Avatar", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Default", () => <Avatar firstName="Bryan" lastName="Joker" />)
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
  .add("With Size and FontSize", () => (
    <Avatar
      withName
      firstName="Anthony"
      lastName="Langford"
      color="cornflowerblue"
      size={100}
      fontSize={30}
    />
  ));
