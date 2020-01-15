import React, { useState, useEffect } from "react";
import {
  Container,
  Backdrop,
  Menu,
  MenuOption,
  MenuOptionText,
  MenuButton,
} from "./styles";
import { Animated, View, Dimensions } from "react-native";
import { startCase } from "lodash";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../styles/colors";

interface OptionsProps {
  label: string;
  onPress?: () => void;
  textColor?: string;
}

interface PopModalButtonProps {
  options: OptionsProps[];
  fontSize?: number | null;
}

const PopModalButton: React.FC<PopModalButtonProps> = props => {
  const windowHeight = Dimensions.get("window").height;

  const [modalVisible, setModalVisible] = useState(false);
  const [animatedModalHeight] = useState(new Animated.Value(0));
  const [animatedOpacity] = useState(new Animated.Value(0));

  const slideUp = () => {
    Animated.timing(animatedModalHeight, {
      toValue: windowHeight,
      duration: 400,
    }).start();
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
    const slide: () => void = modalVisible ? slideUp : slideDown;
    const animateBackdrop: () => void = modalVisible
      ? showBackdrop
      : hideBackdrop;
    slide();
    animateBackdrop();
  }, [modalVisible]);

  const toggleMenu = () => {
    setModalVisible(!modalVisible);
  };

  const renderMenuOption = (
    label: string,
    textColor?: string,
    onPress?: (() => void) | null,
    isLast?: boolean
  ) => {
    const closeModalOnPress = () => {
      if (onPress) onPress();
      toggleMenu();
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

  const renderModal = () => {
    const AnimatedMenu = Animated.createAnimatedComponent(Menu);
    return (
      <AnimatedMenu
        style={{ height: animatedModalHeight }}
        onPress={toggleMenu}
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
        style={{ opacity: animatedOpacity, zIndex: modalVisible ? 1 : -2 }}
      />
    );
  };

  return (
    <>
      <MenuButton onPress={toggleMenu}>
        <MaterialCommunityIcons
          name="dots-horizontal"
          size={32}
          color={colors.CHARCOAL}
        />
      </MenuButton>
      {renderBackdrop()}
      {renderModal()}
    </>
  );
};

export default PopModalButton;
