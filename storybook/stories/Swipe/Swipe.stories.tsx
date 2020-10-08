import React, { useState } from "react";
import { storiesOf } from "@storybook/react-native";
import CenterView from "../../../src/components/CenterView";
import Swipe from "../../../src/components/Swipe";
import { Alert, ScrollView, Button, View } from "react-native";
import colors from "../../../src/styles/colors";
import { Entypo } from "@expo/vector-icons";

const DisabledSwipe = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <ScrollView>
      <Button
        title={isDisabled ? "Enable" : "Disable"}
        onPress={() => setIsDisabled(!isDisabled)}
      />
      <Swipe
        disabled={isDisabled}
        height={36}
        width="180px"
        title="Confirm Pickup"
        titleColor={colors.GREEN}
        fontSize={14}
        swipeIconComponent={
          <Entypo
            name="arrow-long-right"
            size={14}
            color={isDisabled ? colors.GREY : colors.GREEN}
          />
        }
        backgroundColor={colors.WHITE}
        swipeIconBorderColor={colors.TRANSPARENT}
        swipeIconBackgroundColor={colors.WHITE}
        shouldResetAfterSuccess={false}
      />
    </ScrollView>
  );
};

storiesOf("Swipe", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Default with title", () => (
    <View style={{ width: 240 }}>
      <Swipe title="Confirm Pickup" />
    </View>
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
  ))
  .add("Disabled", () => <DisabledSwipe />);
