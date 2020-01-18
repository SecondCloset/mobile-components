import React, { useState, useEffect } from "react";
import { Backdrop, AnimatedMenuContainer } from "./styles";
import { Animated, Dimensions } from "react-native";
import Menu from "./Menu";

export interface Option {
  label: string;
  onPress?: () => void;
  textColor?: string;
}

interface BottomUpMenuProps {
  options: Option[];
  visible: boolean;
  onHide: () => void;
}

const BottomUpMenu: React.FC<BottomUpMenuProps> = props => {
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

  const renderMenu = () => {
    const AnimatedMenu = Animated.createAnimatedComponent(
      AnimatedMenuContainer
    );
    return (
      <AnimatedMenu
        style={{ height: animatedModalHeight }}
        onPress={props.onHide}
        activeOpacity={1}
      >
        <Menu options={props.options} onHide={props.onHide} />
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
      {renderBackdrop()}
      {renderMenu()}
    </>
  );
};

export default BottomUpMenu;
