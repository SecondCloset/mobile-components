import React, { useState, useEffect } from "react";
import { Backdrop, ModalContainer, ModalWrap } from "./styles";
import { Animated, Dimensions } from "react-native";

interface PopModalButtonProps {
  children: React.ReactElement | React.ReactElement[];
  visible: boolean;
  onHide: () => void;
}

const PopModalButton: React.FC<PopModalButtonProps> = props => {
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

  const renderModal = () => {
    const AnimatedModal = Animated.createAnimatedComponent(ModalContainer);
    return (
      <AnimatedModal
        style={{ height: animatedModalHeight }}
        onPress={props.onHide}
        activeOpacity={1}
      >
        <ModalWrap visible={props.visible}>{props.children}</ModalWrap>
      </AnimatedModal>
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
      {renderModal()}
    </>
  );
};

export default PopModalButton;
