import React from "react";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import CenterView from "../CenterView";
import Button from "./Button";

storiesOf("Button", module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add("Yellow", () => (
    <Button
      color="yellow"
      text="BUTTON"
      type="primary"
      onPress={action("clicked-text")}
      width={150}
    />
  ))
  .add("Blue", () => (
    <Button
      color="blue"
      text="BUTTON"
      type="primary"
      onPress={action("clicked-text")}
      width={150}
    />
  ))
  .add("Red", () => (
    <Button
      color="red"
      text="BUTTON"
      type="primary"
      onPress={action("clicked-text")}
      width={150}
    />
  ))
  .add("YellowLight", () => (
    <Button
      color="yellowLight"
      text="BUTTON"
      type="primary"
      onPress={action("clicked-text")}
      width={150}
    />
  ))
  .add("No width", () => (
    <Button
      text="BUTTON"
      color="yellow"
      type="primary"
      onPress={action("clicked-text")}
    />
  ))
  .add("Outline Green With 60% Set Width", () => (
    <Button
      text="BUTTON"
      color="green"
      type="outline"
      onPress={action("clicked-text")}
      width="60%"
    />
  ))
  .add("Loading", () => (
    <Button
      loading
      text="BUTTON"
      shape="rounded"
      onPress={action("clicked-text")}
    />
  ))
  .add("Disabled", () => (
    <Button
      disabled
      text="BUTTON"
      color="blue"
      type="outline"
      onPress={action("clicked-text")}
    />
  ))
  .add("Sausage", () => (
    <Button
      text="BUTTON"
      color="red"
      type="primary"
      shape="rounded"
      onPress={action("clicked-text")}
    />
  ))
  .add("Disabled Sausage", () => (
    <Button
      disabled
      text="BUTTON 1"
      type="primary"
      shape="rounded"
      onPress={action("clicked-text")}
    />
  ))
  .add("Custom", () => (
    <Button
      text="BUTTON"
      color="#fcc522"
      type="outline"
      shape="rounded"
      onPress={action("clicked-text")}
    />
  ));
