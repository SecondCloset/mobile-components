import React, { useEffect, useState } from "react";
import { ModalContainer, ModalWrap } from "./styles";
import { Modal, Animated, Dimensions } from "react-native";

interface BottomUpModalProps {
  children: React.ReactElement | React.ReactElement[];
  visible: boolean;
  onHide: () => void;
}

const BottomUpModal: React.FC<BottomUpModalProps> = props => {
  const windowHeight = Dimensions.get("window").height;
  const [animatedModalHeight] = useState(new Animated.Value(0));

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

  useEffect(() => {
    if (props.visible) slideUp();
    else slideDown();
  }, [props.visible]);

  const renderModalContent = () => {
    const AnimatedModalWrap = Animated.createAnimatedComponent(ModalWrap);
    return (
      <AnimatedModalWrap style={{ maxHeight: animatedModalHeight }}>
        {props.children}
      </AnimatedModalWrap>
    );
  };

  return (
    <Modal visible={props.visible} transparent={true} animationType="fade">
      <ModalContainer activeOpacity={1} onPress={props.onHide}>
        {renderModalContent()}
      </ModalContainer>
    </Modal>
  );
};

export default BottomUpModal;
