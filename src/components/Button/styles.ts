import styled from "styled-components/native";
import COLORS from "../../styles/colors";
import { ButtonProps } from "./Button";

const DEFAULT_COLOR = "blue";
const DEFAULT_FONT_SIZE = 13;
const DEFAULT_TYPE = "default";
const DEFAULT_WIDTH = "100%";

//helpers
const getColorHexCodeFromString = (color: string = DEFAULT_COLOR): string => {
  const c = color.toUpperCase();
  if (c === "YELLOWLIGHT") return COLORS.YELLOW_LIGHT;
  return COLORS[c] || color;
};

const getBackgroundColor = (
  color: string = DEFAULT_COLOR,
  type: string = DEFAULT_TYPE
): string => {
  if (type === "primary") return getColorHexCodeFromString(color);
  else return COLORS.TRANSPARENT;
};

const getBorderColor = (
  color: string = DEFAULT_COLOR,
  type: string = DEFAULT_TYPE
): string => {
  if (type === "outline") return getColorHexCodeFromString(color);
  else if (type === "primary") return getBackgroundColor(color, type);
  else return COLORS.TRANSPARENT;
};

const getTextColor = (
  color: string = DEFAULT_COLOR,
  type: string = DEFAULT_TYPE
) => {
  if (type === "primary") {
    switch (color) {
      case "yellow":
      case "yellowLight":
        return COLORS.CHARCOAL;
      default:
        return COLORS.WHITE;
    }
  } else return getColorHexCodeFromString(color);
};

const getButtonWidth = (value: ButtonProps["width"] = DEFAULT_WIDTH) => {
  if (typeof value === "number") {
    return `${value}px`;
  }
  return value;
};

interface ContainerProps {
  color: ButtonProps["color"];
  type: ButtonProps["type"];
  shape?: ButtonProps["shape"];
  width?: ButtonProps["width"];
  disabled?: ButtonProps["disabled"];
}

const Container = styled.TouchableOpacity<ContainerProps>`
  padding: 10px 20px;
  background-color: ${props =>
    props.disabled
      ? COLORS.GREY_LIGHT
      : getBackgroundColor(props.color, props.type)};
  border-radius: ${props => (props.shape === "rounded" ? "30px" : "5px")};
  border-color: ${props =>
    props.disabled
      ? COLORS.GREY_LIGHT
      : getBorderColor(props.color, props.type)};
  border-width: 1px;
  display: flex;
  width: ${props => getButtonWidth(props.width)};
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

interface ButtonTextProps {
  color: ButtonProps["color"];
  type: ButtonProps["type"];
  disabled?: ButtonProps["disabled"];
  fontSize?: ButtonProps["fontSize"];
}

const ButtonText = styled.Text<ButtonTextProps>`
  color: ${props =>
    props.disabled ? COLORS.GREY_MID : getTextColor(props.color, props.type)};
  font-size: ${props => props.fontSize || DEFAULT_FONT_SIZE}px;
`;

const ButtonLoader = styled.View`
  margin: 20px 0 0;
  justify-content: center;
  align-items: center;
`;

export { Container, ButtonText, ButtonLoader };
