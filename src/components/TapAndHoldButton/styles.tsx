import nativeStyled from "styled-components/native";
import styled from "styled-components";
import { Animated } from "react-native";
import colors from "../../styles/colors";

interface StyledButtonProps {
  disabled?: boolean;
}

export const HoldButton = nativeStyled.View<StyledButtonProps>`
  padding: 16px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  background-color: ${(props) =>
    props.disabled ? colors.GREY : colors.DAYDREAM_BLUE}};
`;

export const ClickButton = styled(HoldButton)`
  background-color: ${(props) =>
    props.disabled ? colors.GREY : colors.POLAR_GREEN}};
`;

export const Container = nativeStyled.TouchableWithoutFeedback`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProgressBar = styled(Animated.View)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
`;
export const Text = nativeStyled.Text`
  color: ${colors.WHITE};
  font-weight: 600;
  font-size: 13px;
  line-height: 20px;
`;
