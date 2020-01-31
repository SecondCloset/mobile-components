import React from "react";
import { storiesOf } from "@storybook/react-native";
import CenterView from "../CenterView";
import Avatar from "./Avatar";

storiesOf("Avatar", module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add("Default", () => <Avatar firstName="Anthony" lastName="Langford" />)
  .add("With Name", () => (
    <Avatar withName firstName="Anthony" lastName="Langford" />
  ));
