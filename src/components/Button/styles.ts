import styled from "styled-components/native";
import colors from "../../styles/colors";

//helpers
const getBackgroundColor = (color?: string, type?: string) => {
  const colorLibrary = Object.keys(colors);
  const color_: string = color || colors.BLUE;
  if (type === "outline") return colors.WHITE;
  if (colorLibrary.includes(color_.toUpperCase()))
    return colors[color_.toUpperCase()];
  return color_;
};

const getBorderColor = (color?: string, type?: string) => {
  const colorLibrary = Object.keys(colors);
  const color_: string = color || colors.BLUE;
  if (type === "outline") return color_;
  if (colorLibrary.includes(color_.toUpperCase()))
    return colors[color_.toUpperCase()];
  return color_;
};

const getTextColor = (color?: string, type?: string) => {
  const color_: string = color || colors.BLUE;
  if (type === "outline") return color_;
  switch (color_) {
    case "yellow":
      return colors.CHARCOAL;
    default:
      return colors.WHITE;
  }
};

//interfaces
interface ContainerProps {
  color?: string;
  type?: string;
  shape?: string;
  disabled?: boolean;
}

interface ButtonTextProps {
  color?: string;
  type?: string;
  disabled?: boolean;
}

const Container = styled.TouchableOpacity<ContainerProps>`
  padding-horizontal: 15;
  padding-vertical: 8;
  background-color: ${props =>
    props.disabled
      ? colors.WHITE
      : getBackgroundColor(props.color, props.type)};
  border-radius: ${props => (props.shape === "rounded" ? 30 : 5)};
  border-color: ${props =>
    props.disabled ? colors.GREY : getBorderColor(props.color, props.type)};
  border-width: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text<ButtonTextProps>`
  color: ${props =>
    props.disabled ? colors.GREY : getTextColor(props.color, props.type)};
`;

const ButtonLoader = styled.View`
  margin-top: 20;
  justify-content: center;
  align-items: center;
`;

export { Container, ButtonText, ButtonLoader };
