import React, { FC, useRef, useEffect, useState } from "react";
import { Animated, PanResponder, Image, View } from "react-native";
import {
  styles,
  borderWidth,
  margin,
  SwipeIcon,
  DefaultSwipeIcon,
} from "./styles";
import colors from "../../../styles/colors";

interface Props {
  wrapperWidth: number;
  disabled?: boolean;
  enableRightToLeftSwipe?: boolean;
  onSwipeStart?: () => void;
  onSwipeFail?: () => void;
  onSwipeSuccess?: () => void;
  shouldResetAfterSuccess?: boolean;
  resetAfterSuccessAnimDuration?: number;
  resetAfterSuccessAnimDelay?: number;
  swipeIconStyles?: Object;
  iconSize: number;
  swipeIconBackgroundColor?: string;
  disabledSwipeIconBorderColor?: string;
  swipeIconBorderColor?: string;
  swipeIconComponent?: JSX.Element;
  swipeSuccessThreshold: number;
  swipeIconImageSource?: string;
  railFillBackgroundColor: string;
  railFillBorderColor: string;
  railStyles?: Object;
}

const Swiper: FC<Props> = ({
  wrapperWidth = 0,
  disabled = false,
  onSwipeStart,
  enableRightToLeftSwipe,
  onSwipeSuccess,
  onSwipeFail,
  shouldResetAfterSuccess,
  swipeIconStyles = {},
  iconSize,
  swipeIconBackgroundColor,
  disabledSwipeIconBorderColor,
  swipeIconBorderColor,
  swipeIconComponent: SwipeIconComponent,
  swipeSuccessThreshold,
  swipeIconImageSource,
  railFillBackgroundColor,
  railFillBorderColor,
  railStyles,
}) => {
  const paddingAndMarginsOffset = borderWidth + 2 * margin;
  const defaultContainerWidth = iconSize;
  const maxWidth = wrapperWidth - paddingAndMarginsOffset;

  const [defaultWidth, setDefaultWidth] = useState(defaultContainerWidth);
  const [backgroundColor, setBackgroundColor] = useState<string>(colors.GREEN);
  const [borderColor, setBorderColor] = useState<string>(colors.GREEN);

  const animatedWidth = useRef(new Animated.Value(defaultContainerWidth))
    .current;

  const onPanResponderStart = () => {
    if (disabled) return;

    onSwipeStart && onSwipeStart();
  };

  const onPanResponderMove = async (event, gestureState) => {
    if (disabled) return;
    const rtlMultiplier = enableRightToLeftSwipe ? -1 : 1;
    const newWidth = defaultContainerWidth + rtlMultiplier * gestureState.dx;
    if (newWidth < defaultContainerWidth) {
      // Reached starting position
      reset();
    } else if (newWidth > maxWidth) {
      // Reached end position
      setBackgroundColors();
      setDefaultWidth(maxWidth);
    } else {
      setBackgroundColors();
      await Animated.timing(animatedWidth, {
        toValue: newWidth,
        duration: 0,
        useNativeDriver: false,
      }).start();
      setDefaultWidth(newWidth);
    }
  };

  const onPanResponderRelease = (event, gestureState) => {
    if (disabled) return;
    const rtlMultiplier = enableRightToLeftSwipe ? -1 : 1;
    const newWidth = defaultContainerWidth + rtlMultiplier * gestureState.dx;
    const successThresholdWidth = maxWidth * (swipeSuccessThreshold / 100);
    newWidth < successThresholdWidth
      ? onSwipeNotMetSuccessThreshold()
      : onSwipeMetSuccessThreshold(newWidth);
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onShouldBlockNativeResponder: () => true,
      onPanResponderTerminationRequest: () => false,
      onPanResponderStart,
      onPanResponderMove,
      onPanResponderRelease,
    })
  ).current;

  useEffect(() => {
    Animated.timing(animatedWidth, {
      toValue: defaultWidth,
      duration: 400,
      useNativeDriver: false,
    }).start();
  }, [animatedWidth, defaultWidth]);

  const onSwipeNotMetSuccessThreshold = () => {
    // Animate to initial position
    setDefaultWidth(defaultContainerWidth);
    onSwipeFail && onSwipeFail();
  };

  const onSwipeMetSuccessThreshold = (newWidth) => {
    if (newWidth !== maxWidth) {
      finishRemainingSwipe();
      return;
    }
    onSwipeSuccess && onSwipeSuccess();
    reset();
  };

  function setBackgroundColors() {
    // Set backgroundColor only if not already set
    if (backgroundColor === colors.GREEN) {
      setBackgroundColor(railFillBackgroundColor);
      setBorderColor(railFillBorderColor);
    }
  }

  const finishRemainingSwipe = () => {
    // Animate to final position
    setDefaultWidth(maxWidth);
    onSwipeSuccess && onSwipeSuccess();

    // Animate back to initial position
    shouldResetAfterSuccess && reset();
  };

  const reset = () => {
    setDefaultWidth(defaultContainerWidth);
    if (backgroundColor !== railFillBackgroundColor) {
      setBackgroundColor(railFillBackgroundColor);
      setBorderColor(railFillBorderColor);
    }
  };

  const renderSwipeIcon = () => {
    return (
      <SwipeIcon
        height={iconSize}
        iconWidth={iconSize}
        backgroundColor={swipeIconBackgroundColor}
        borderColor={
          disabled ? disabledSwipeIconBorderColor : swipeIconBorderColor
        }
        style={swipeIconStyles}
      >
        {!SwipeIconComponent && swipeIconImageSource && (
          <Image resizeMethod="resize" source={{ uri: swipeIconImageSource }} />
        )}
        {SwipeIconComponent && <View>{SwipeIconComponent}</View>}
        {!SwipeIconComponent && !swipeIconImageSource && (
          <DefaultSwipeIcon disabled={disabled} />
        )}
      </SwipeIcon>
    );
  };

  const swiperStyles = {
    backgroundColor,
    borderColor,
    width: animatedWidth,
    ...railStyles,
    ...(enableRightToLeftSwipe ? styles.containerRTL : styles.container),
  };

  return (
    <Animated.View
      style={[swiperStyles]}
      {...(disabled ? null : panResponder.panHandlers)}
    >
      {renderSwipeIcon()}
    </Animated.View>
  );
};

export default Swiper;
