import React, { FC, useState } from "react";
import { SwipeWrapper, Title } from "./styles";
import Swiper from "./Swiper";
import colors from "../../styles/colors";

interface Props {
  backgroundColor?: string;
  borderColor?: string;
  disabled?: boolean;
  enableRightToLeftSwipe?: boolean;
  height?: number;
  onSwipeFail?: () => void;
  onSwipeStart?: () => void;
  onSwipeSuccess?: () => void;
  railBackgroundColor?: string;
  railBorderColor?: string;
  railFillBackgroundColor?: string;
  railFillBorderColor?: string;
  railStyles?: Object;
  resetAfterSuccessAnimDelay?: number;
  resetAfterSuccessAnimDuration?: number;
  shouldResetAfterSuccess?: boolean;
  swipeSuccessThreshold?: number;
  swipeIconBackgroundColor?: string;
  swipeIconBorderColor?: string;
  swipeIconComponent?: JSX.Element;
  swipeIconImageSource?: string;
  swipeIconStyles?: object;
  title?: string;
  titleColor?: string;
  fontSize?: number;
  width?: number | string;
}

const Swipe: FC<Props> = ({
  backgroundColor,
  borderColor,
  disabled = false,
  enableRightToLeftSwipe,
  height = 40,
  onSwipeFail,
  onSwipeStart,
  onSwipeSuccess,
  railFillBackgroundColor = colors.GREEN,
  railFillBorderColor = colors.GREEN,
  railStyles,
  shouldResetAfterSuccess = true,
  swipeSuccessThreshold = 70,
  swipeIconBackgroundColor,
  swipeIconBorderColor,
  swipeIconComponent,
  swipeIconImageSource,
  swipeIconStyles = {},
  title,
  titleColor,
  fontSize = 20,
  width,
}) => {
  const [wrapperWidth, setWrapperWidth] = useState(0);

  const handleOnLayout = async (e) => {
    if (wrapperWidth) return;
    setWrapperWidth(e.nativeEvent.layout.width);
  };

  return (
    <SwipeWrapper
      totalWidth={width === 0 ? "auto" : width}
      backgroundColor={backgroundColor}
      borderColor={disabled ? colors.GREY_MID : borderColor}
      onLayout={handleOnLayout}
    >
      <Title
        color={disabled ? colors.GREY_MID : titleColor}
        fontSize={fontSize}
      >
        {title}
      </Title>
      {wrapperWidth > 0 && (
        <Swiper
          wrapperWidth={wrapperWidth}
          disabled={disabled}
          enableRightToLeftSwipe={enableRightToLeftSwipe}
          iconSize={height}
          onSwipeFail={onSwipeFail}
          onSwipeStart={onSwipeStart}
          onSwipeSuccess={onSwipeSuccess}
          railFillBackgroundColor={railFillBackgroundColor}
          railFillBorderColor={railFillBorderColor}
          railStyles={railStyles}
          shouldResetAfterSuccess={shouldResetAfterSuccess}
          swipeSuccessThreshold={swipeSuccessThreshold}
          swipeIconBackgroundColor={swipeIconBackgroundColor}
          swipeIconBorderColor={swipeIconBorderColor}
          swipeIconComponent={swipeIconComponent}
          swipeIconImageSource={swipeIconImageSource}
          swipeIconStyles={swipeIconStyles}
        />
      )}
    </SwipeWrapper>
  );
};

export default Swipe;
