import React from "react";
import { Text } from "react-native";
import { storiesOf } from "@storybook/react-native";
import CenterView from "../CenterView";
import Card from "./Card";

storiesOf("Card", module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add("Default", () => (
    <Card>
      <Text style={{ padding: 30 }}>Default</Text>
    </Card>
  ))
  .add("With Shadow", () => (
    <Card withShadow>
      <Text style={{ padding: 30 }}>Box Type Card</Text>
    </Card>
  ))
  .add("With Border", () => (
    <Card withBorder>
      <Text style={{ padding: 30 }}>Box Type Card</Text>
    </Card>
  ));
