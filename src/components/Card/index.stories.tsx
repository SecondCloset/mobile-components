import React from "react";
import { Text } from "react-native";
import { storiesOf } from "@storybook/react-native";
import CenterView from "../CenterView";
import Card from "./Card";

storiesOf("Card", module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add("Default", () => (
    <Card>
      <Text>Hello</Text>
    </Card>
  ))
  .add("Box", () => (
    <Card type="box">
      <Text>Hello</Text>
    </Card>
  ));
