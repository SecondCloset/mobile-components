import styled from "styled-components/native";
import COLORS from "../../styles/colors";

export const Container = styled.View`
  border-radius: 5px;
  flex-direction: row;
`;

interface ButtonProps {
  selected: boolean;
  isFirst: boolean;
  isLast: boolean;
  disabled: boolean;
  isTwoButtons: boolean;
}

const getBackgroundColor = (selected: boolean, disabled: boolean): string => {
  if (disabled) return COLORS.GREY_LIGHT;
  return selected ? COLORS.BLUE : COLORS.WHITE;
};

export const Button = styled.TouchableOpacity<ButtonProps>`
  background: ${props => getBackgroundColor(props.selected, props.disabled)};
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-width: 1px;
  border-color: ${props => (props.disabled ? COLORS.GREY : COLORS.BLUE)};
  border-right-width: ${props =>
    props.isFirst && !props.isTwoButtons ? "0px" : "1px"};
  border-left-width: ${props => (props.isLast ? "0px" : "1px")};
  border-top-left-radius: ${props => (props.isFirst ? "5px" : "0px")};
  border-bottom-left-radius: ${props => (props.isFirst ? "5px" : "0px")};
  border-top-right-radius: ${props => (props.isLast ? "5px" : "0px")};
  border-bottom-right-radius: ${props => (props.isLast ? "5px" : "0px")};
`;

const getTextColor = (selected: boolean, disabled: boolean): string => {
  if (disabled) return COLORS.GREY;
  return selected ? COLORS.WHITE : COLORS.BLUE;
};

interface ButtonTextProps {
  selected: boolean;
  disabled: boolean;
}

export const ButtonText = styled.Text<ButtonTextProps>`
  color: ${props => getTextColor(props.selected, props.disabled)};
  font-size: 10px;
  margin: 1px;
  font-weight: 500;
  text-align: center;
`;

export const TitleText = styled(ButtonText)`
  font-size: 12px;
`;
