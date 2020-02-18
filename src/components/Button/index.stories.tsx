import React from "react";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import CenterView from "../CenterView";
import Button from "./Button";

storiesOf("Button", module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add("Default", () => <Button text="BACK" onPress={action("clicked-text")} />)
  .add("Outline Default", () => (
    <Button text="ARRIVED" type="outline" onPress={action("clicked-text")} />
  ))
  .add("Primary Yellow With 150px Set Width", () => (
    <Button
      text="NEXT"
      color="yellow"
      type="primary"
      onPress={action("clicked-text")}
      width={150}
    />
  ))
  .add("Outline Green With 60% Set Width", () => (
    <Button
      text="ARRIVED"
      color="green"
      type="outline"
      onPress={action("clicked-text")}
      width="60%"
    />
  ))
  .add("Loading", () => (
    <Button
      loading
      text="LOADING"
      shape="rounded"
      onPress={action("clicked-text")}
    />
  ))
  .add("Disabled", () => (
    <Button
      disabled
      text="DISABLED"
      color="blue"
      type="outline"
      onPress={action("clicked-text")}
    />
  ))
  .add("Sausage", () => (
    <Button
      text="SAUSAGE"
      color="red"
      type="primary"
      shape="rounded"
      onPress={action("clicked-text")}
    />
  ))
  .add("Disabled Sausage", () => (
    <Button
      disabled
      text="SAUSAGE 1"
      type="primary"
      shape="rounded"
      onPress={action("clicked-text")}
    />
  ))
  .add("Custom", () => (
    <Button
      text="APOLLO"
      color="#fcc522"
      type="outline"
      shape="rounded"
      onPress={action("clicked-text")}
    />
  ));
