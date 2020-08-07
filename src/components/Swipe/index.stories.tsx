import React from "react";
import { storiesOf } from "@storybook/react-native";
import CenterView from "../CenterView";
import Swipe from "./Swipe";
import { Alert, ScrollView } from "react-native";
import colors from "../../styles/colors";
import { Entypo } from "@expo/vector-icons";

storiesOf("Swipe", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Default with title and width 200px", () => (
    <Swipe width={220} title="Confirm Pickup" />
  ))
  .add("With onSwipeSuccess", () => (
    <Swipe
      width={220}
      title="Confirm Pickup"
      onSwipeSuccess={() => Alert.alert("Success", "Swiped!")}
    />
  ))
  .add("With font color", () => (
    <Swipe
      width={180}
      title="Confirm Pickup"
      titleColor={colors.GREEN}
      fontSize={14}
    />
  ))
  .add("With icon", () => (
    <Swipe
      width={180}
      title="Confirm Pickup"
      titleColor={colors.GREEN}
      fontSize={14}
      swipeIconComponent={
        <Entypo name="arrow-long-right" size={14} color={colors.GREEN} />
      }
      swipeIconBorderColor={colors.TRANSPARENT}
      swipeIconBackgroundColor={colors.WHITE}
      shouldResetAfterSuccess={false}
    />
  ))
  .add("Inside ScrollView", () => (
    <ScrollView>
      <Swipe
        width={180}
        title="Confirm Pickup"
        titleColor={colors.GREEN}
        fontSize={14}
        swipeIconComponent={
          <Entypo name="arrow-long-right" size={14} color={colors.GREEN} />
        }
        swipeIconBorderColor={colors.TRANSPARENT}
        swipeIconBackgroundColor={colors.WHITE}
        shouldResetAfterSuccess={false}
      />
    </ScrollView>
  ));
