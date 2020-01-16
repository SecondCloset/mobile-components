import React, { useState, useEffect } from "react";
import {
  Container,
  Backdrop,
  Menu,
  MenuOption,
  MenuOptionText,
} from "./styles";
import { Animated, View, Dimensions } from "react-native";
import { startCase } from "lodash";

interface OptionsProps {
  label: string;
  onPress?: () => void;
  textColor?: string;
}

interface PopMenuButtonProps {
  options: OptionsProps[];
  visible: boolean;
  onHide: () => void;
}

const PopMenuButton: React.FC<PopMenuButtonProps> = props => {
  const windowHeight = Dimensions.get("window").height;
  const [animatedModalHeight] = useState(new Animated.Value(0));
  const [animatedOpacity] = useState(new Animated.Value(0));

  const slideUp = () => {
    Animated.sequence([
      Animated.delay(100),
      Animated.timing(animatedModalHeight, {
        toValue: windowHeight,
        duration: 400,
      }),
    ]).start();
  };

  const slideDown = () => {
    Animated.timing(animatedModalHeight, {
      toValue: 0,
      duration: 200,
    }).start();
  };

  const showBackdrop = () => {
    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 400,
    }).start();
  };

  const hideBackdrop = () => {
    Animated.timing(animatedOpacity, {
      toValue: 0,
      duration: 400,
    }).start();
  };

  useEffect(() => {
    const slide: () => void = props.visible ? slideUp : slideDown;
    const animateBackdrop: () => void = props.visible
      ? showBackdrop
      : hideBackdrop;
    slide();
    animateBackdrop();
  }, [props.visible]);

  const renderMenuOption = (
    label: string,
    textColor?: string,
    onPress?: (() => void) | null,
    isLast?: boolean
  ) => {
    const closeModalOnPress = () => {
      if (onPress) onPress();
      props.onHide();
    };

    return (
      <MenuOption key={label} onPress={closeModalOnPress} isLast={isLast}>
        <MenuOptionText color={textColor}>{startCase(label)}</MenuOptionText>
      </MenuOption>
    );
  };

  const renderMenuOptions = () => {
    return props.options.map((option, index) => {
      const { label, textColor, onPress } = option;

      if (index === props.options.length - 1) {
        return renderMenuOption(label, textColor, onPress, true);
      }
      return renderMenuOption(label, textColor, onPress);
    });
  };

  const renderMenu = () => {
    const AnimatedMenu = Animated.createAnimatedComponent(Menu);
    return (
      <AnimatedMenu
        style={{ height: animatedModalHeight }}
        onPress={props.onHide}
        activeOpacity={1}
      >
        <View>
          <Container>{renderMenuOptions()}</Container>
          <Container>
            {renderMenuOption("cancel", "black", null, true)}
          </Container>
        </View>
      </AnimatedMenu>
    );
  };

  const renderBackdrop = () => {
    const AnimatedBackdrop = Animated.createAnimatedComponent(Backdrop);
    return (
      <AnimatedBackdrop
        style={{ opacity: animatedOpacity, zIndex: props.visible ? 1 : -2 }}
      />
    );
  };

  return (
    <>
      {/* <MenuButton onPress={toggleMenu}>
        <MaterialCommunityIcons
          name="dots-horizontal"
          size={32}
          color={colors.CHARCOAL}
        />
      </MenuButton> */}
      {renderBackdrop()}
      {renderMenu()}
    </>
  );
};

export default PopMenuButton;
