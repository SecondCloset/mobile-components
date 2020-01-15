import React from "react";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import CenterView from "../CenterView";
import Button from "./Button";

storiesOf("Button", module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add("Default", () => <Button text="back" onPress={action("clicked-text")} />)
  .add("Outline Default", () => (
    <Button text="arrived" type="outline" onPress={action("clicked-text")} />
  ))
  .add("Primary Yellow", () => (
    <Button
      text="next"
      color="yellow"
      type="primary"
      onPress={action("clicked-text")}
    />
  ))
  .add("Outline Green", () => (
    <Button
      text="arrived"
      color="green"
      type="outline"
      onPress={action("clicked-text")}
    />
  ))
  .add("Loading", () => (
    <Button
      loading
      text="loading"
      shape="rounded"
      onPress={action("clicked-text")}
    />
  ))
  .add("Disabled", () => (
    <Button
      disabled
      text="disabled 1"
      color="blue"
      type="outline"
      shape="default"
      onPress={action("clicked-text")}
    />
  ))
  .add("Sausage", () => (
    <Button
      text="sausage 1"
      color="red"
      type="primary"
      shape="rounded"
      onPress={action("clicked-text")}
    />
  ))
  .add("Disabled Sausage", () => (
    <Button
      disabled
      text="sausage 1"
      type="primary"
      shape="rounded"
      onPress={action("clicked-text")}
    />
  ))
  .add("Custom", () => (
    <Button
      text="apollo"
      color="#fcc522"
      type="outline"
      shape="rounded"
      onPress={action("clicked-text")}
    />
  ));
