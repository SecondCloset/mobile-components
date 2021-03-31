import React, { useEffect } from "react";
import { Animated, LayoutChangeEvent, ActivityIndicator } from "react-native";
import { useState } from "react";
import * as Haptics from "expo-haptics";

import colors from "../../styles/colors";

import * as S from "./styles";
interface Props {
  disabled?: boolean;
  loading?: boolean;
  holdTime?: number;
  initialText: string;
  completedText: string;
  onCompletePress: () => void;
}

const TapAndHoldButton: React.FC<Props> = ({
  disabled,
  loading,
  holdTime = 2500,
  initialText,
  completedText,
  onCompletePress,
}) => {
  const [progress] = useState(new Animated.Value(0));
  const [layout, setLayout] = useState({ height: 0, width: 0 });
  const [progressValue, setProgressValue] = useState(0);

  const onHoldText = "Release to Cancel";

  const onCompletedState = progressValue === 1; // the bar has fully loaded

  if (loading) {
    return (
      <S.Container>
        <S.ClickButton disabled={true}>
          <ActivityIndicator size={"small"} color={colors.GREY_MID} />
        </S.ClickButton>
      </S.Container>
    );
  }

  useEffect(() => {
    if (onCompletedState) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    }
  }, [progressValue]);

  progress.addListener(({ value }) => setProgressValue(value));

  const handlePressIn = () => {
    Animated.timing(progress, {
      duration: holdTime,
      toValue: 1,
      useNativeDriver: false,
    }).start();
  };

  const handlePressOut = () => {
    if (onCompletedState) return;

    Animated.timing(progress, {
      duration: progressValue * 1000,
      toValue: 0,
      useNativeDriver: false,
    }).start();
  };

  const progressStyles = () => {
    const width = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, layout.width],
    });
    return {
      width: width,
      backgroundColor: colors.POLAR_GREEN,
    };
  };

  const setButtonWidth = (e: LayoutChangeEvent) => {
    setLayout({
      height: e.nativeEvent.layout.height,
      width: e.nativeEvent.layout.width,
    });
  };

  const holdLabel = progressValue === 0 ? initialText : onHoldText;
  return (
    <>
      {onCompletedState ? (
        <S.Container onPress={onCompletePress} disabled={disabled}>
          <S.ClickButton>
            <S.Text>{completedText}</S.Text>
          </S.ClickButton>
        </S.Container>
      ) : (
        <S.Container
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          disabled={disabled}
        >
          <S.HoldButton onLayout={setButtonWidth} disabled={disabled}>
            <S.ProgressBar style={progressStyles()} />
            <S.Text>{holdLabel}</S.Text>
          </S.HoldButton>
        </S.Container>
      )}
    </>
  );
};

export default TapAndHoldButton;
