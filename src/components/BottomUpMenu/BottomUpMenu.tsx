import React, { useState, useEffect } from "react";
import { Backdrop, AnimatedMenuContainer } from "./styles";
import { Modal, Animated, Dimensions } from "react-native";
import Menu from "./Menu";

export interface Option {
  label: string;
  onPress: () => void;
  textColor: string;
  disabled?: boolean;
}

interface BottomUpMenuProps {
  options: Option[];
  visible: boolean;
  onHide: () => void;
}

const BottomUpMenu: React.FC<BottomUpMenuProps> = (props) => {
  const windowHeight = Dimensions.get("window").height;
  const [animatedModalHeight] = useState(new Animated.Value(0));

  const slideUp = () => {
    Animated.sequence([
      Animated.timing(animatedModalHeight, {
        toValue: windowHeight,
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const slideDown = () => {
    Animated.timing(animatedModalHeight, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    if (props.visible) slideUp();
    else slideDown();
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

  return (
    <Modal visible={props.visible} transparent={true} animationType="fade">
      <Backdrop>{renderMenu()}</Backdrop>
    </Modal>
  );
};

export default BottomUpMenu;
