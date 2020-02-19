import styled from "styled-components/native";
import colors from "../../styles/colors";

//helpers
const getColorHexCodeFromString = (color: string): string => {
  const c = color.toUpperCase() || "BLUE";
  return colors[c] || color;
};

const getBackgroundColor = (color: string, type: string): string => {
  if (type === "primary") return getColorHexCodeFromString(color);
  else return colors.TRANSPARENT;
};

const getBorderColor = (color: string, type: string): string => {
  if (type === "outline") return getColorHexCodeFromString(color);
  else if (type === "primary") return getBackgroundColor(color, type);
  else return colors.TRANSPARENT;
};

const getTextColor = (color: string, type: string) => {
  if (type === "primary") {
    switch (color) {
      case "yellow":
        return colors.CHARCOAL;
      default:
        return colors.WHITE;
    }
  } else return getColorHexCodeFromString(color);
};
//interfaces
interface ContainerProps {
  color: "yellow" | "blue" | "red" | string;
  type: "primary" | "outline" | "default";
  shape?: "rounded";
  width?: number | string;
  disabled?: boolean;
}

interface ButtonTextProps {
  color: "yellow" | "blue" | "red" | string;
  type: "primary" | "outline" | "default";
  disabled?: boolean;
  fontSize: number;
}

const getButtonWidth = value => {
  if (typeof value === "number") {
    return `${value}px`;
  }
  return value;
};

const Container = styled.TouchableOpacity<ContainerProps>`
  padding: 10px 20px;
  background-color: ${props =>
    props.disabled
      ? colors.WHITE
      : getBackgroundColor(props.color, props.type)};
  border-radius: ${props => (props.shape === "rounded" ? "30px" : "5px")};
  border-color: ${props =>
    props.disabled ? colors.GREY : getBorderColor(props.color, props.type)};
  border-width: 1px;
  display: flex;
  width: ${props => getButtonWidth(props.width)};
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text<ButtonTextProps>`
  color: ${props =>
    props.disabled ? colors.GREY : getTextColor(props.color, props.type)};
  font-size: ${props => `${props.fontSize}px` || null};
`;

const ButtonLoader = styled.View`
  margin: 20px 0 0;
  justify-content: center;
  align-items: center;
`;

export { Container, ButtonText, ButtonLoader };
