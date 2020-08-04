import React, { useEffect, useState } from "react";
import {
  DrawerContainer,
  DrawerWrap,
  DrawerClosetButton,
  DrawerClosetButtonWrap,
  DrawerContentWrapper,
  ClosetArea,
} from "./styles";
import { Modal, Animated, Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";

interface DrawerProps {
  children: React.ReactElement | React.ReactElement[];
  visible: boolean;
  width?: string | number;
  onHide: () => void;
  direction?: "right" | "left";
  closeButtonPosition?: "right" | "left";
  backgroundColor?: string;
}

const Drawer: React.FC<DrawerProps> = (props) => {
  const windowWidth = Dimensions.get("window").width;
  const width = props.width || windowWidth;
  let drawerWidth = windowWidth;
  if (typeof width === "string") {
    const percent = +width.replace("%", "") / 100;
    drawerWidth = windowWidth * percent;
  } else if (typeof width === "number") {
    drawerWidth = width;
  }
  const direction = props.direction || "right";

  const [animatedModalWidth] = useState(new Animated.Value(0));

  const slide = () => {
    Animated.timing(animatedModalWidth, {
      toValue: drawerWidth,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const collapse = () => {
    Animated.timing(animatedModalWidth, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start(props.onHide);
  };

  useEffect(() => {
    if (props.visible) slide();
    else collapse();
  }, [props.visible]);

  const renderCloseButtonRow = () => {
    return (
      <DrawerClosetButtonWrap
        closeButtonPosition={props.closeButtonPosition || "right"}
      >
        <DrawerClosetButton onPress={collapse}>
          <AntDesign name="close" size={32} />
        </DrawerClosetButton>
      </DrawerClosetButtonWrap>
    );
  };

  const renderModalContent = () => {
    const AnimatedDrawerWrap = Animated.createAnimatedComponent(DrawerWrap);
    const style = {
      maxWidth: animatedModalWidth,
      position: "absolute",
    };
    if (direction === "left") style["left"] = 0;
    else style["right"] = 0;

    return (
      <AnimatedDrawerWrap style={style}>
        <DrawerContentWrapper backgroundColor={props.backgroundColor}>
          {renderCloseButtonRow()}
          {props.children}
        </DrawerContentWrapper>
      </AnimatedDrawerWrap>
    );
  };

  const renderLeftCloseArea = () => {
    if (direction === "left") return null;
    return (
      <ClosetArea
        width={windowWidth - drawerWidth}
        activeOpacity={1}
        onPress={collapse}
      />
    );
  };

  const renderRightCloseArea = () => {
    if (direction === "right") return null;
    return (
      <ClosetArea
        width={windowWidth - drawerWidth}
        activeOpacity={1}
        onPress={collapse}
      />
    );
  };

  return (
    <Modal visible={props.visible} transparent={true} animationType="none">
      <DrawerContainer>
        {renderLeftCloseArea()}
        {renderModalContent()}
        {renderRightCloseArea()}
      </DrawerContainer>
    </Modal>
  );
};

export default Drawer;
