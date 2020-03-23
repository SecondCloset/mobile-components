import React, { useState, useEffect } from "react";
import { Animated, TouchableOpacity } from "react-native";

import { Container } from "./styles";

interface CollapseProps {
  triggerElement: React.ReactElement;
  children: React.ReactElement | React.ReactElement[];
  defaultOpen?: boolean;
}

const Collapse: React.FC<CollapseProps> = props => {
  const [maxHeight, setMaxHeight] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [animatedHeight] = useState(new Animated.Value(0));

  const open = () => {
    Animated.timing(animatedHeight, {
      toValue: maxHeight,
      duration: 200,
    }).start();
  };

  const close = () => {
    Animated.timing(animatedHeight, {
      toValue: 0,
      duration: 200,
    }).start();
  };

  useEffect(() => {
    if (!isInitialized) return;
    if (isOpen) open();
    else close();
  }, [isOpen]);

  const onLayout = event => {
    const height = event?.nativeEvent?.layout?.height;
    if (height > maxHeight) {
      setMaxHeight(height);
      setIsInitialized(true);
      if (props.defaultOpen) setIsOpen(true);
    }
  };

  const renderTriggerButton = () => {
    return (
      <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
        {props.triggerElement}
      </TouchableOpacity>
    );
  };

  const renderAnimatedContent = () => {
    const AnimatedContentWrap = Animated.createAnimatedComponent(Container);
    return (
      <AnimatedContentWrap style={{ height: animatedHeight }}>
        {isInitialized && <Container>{props.children}</Container>}
      </AnimatedContentWrap>
    );
  };

  const renderInitializingContainer = () => {
    if (isInitialized) return null;
    return <Container onLayout={onLayout}>{props.children}</Container>;
  };

  return (
    <Container>
      {renderTriggerButton()}
      {renderInitializingContainer()}
      {renderAnimatedContent()}
    </Container>
  );
};

export default Collapse;
