import { Dimensions } from "react-native";
import styled from "styled-components/native";
import colors from "../../styles/colors";

//helpers
const getTextColor = (color?: string) => {
  const colorLibrary = Object.keys(colors);
  const color_ = color || colors.BLACK;
  if (colorLibrary.includes(color_.toUpperCase()))
    return colors[color_.toUpperCase()];
  return color_;
};

//interfaces
interface MenuOptionProps {
  isLast?: boolean;
}

interface MenuOptionTextProps {
  color?: string;
}

const Backdrop = styled.View`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  background-color: ${colors.TRANSPARENT_GREY};
  width: ${Dimensions.get("window").width}px;
  height: ${Dimensions.get("window").height}px;
  justify-content: flex-end;
  flex: 1;
  color: blue;
`;

const Menu = styled.TouchableOpacity`
  width: ${Dimensions.get("window").width}px;
  z-index: 2;
  background-color: ${colors.TRANSPARENT};
  padding: 10px;
  position: absolute;
  bottom: 20px;
  justify-content: flex-end;
`;

const Container = styled.View`
  background-color: ${colors.WHITE};
  border-radius: 10px;
  margin: 5px;
`;

const MenuOption = styled.TouchableOpacity<MenuOptionProps>`
  padding: 20px 0;
  border-bottom-width: ${props => (props.isLast ? 0 : 1)}px;
  border-bottom-color: ${colors.GREY_LIGHT};
  flex-direction: row;
  justify-content: center;
`;

const MenuOptionText = styled.Text<MenuOptionTextProps>`
  color: ${props => getTextColor(props.color)};
`;

export { Container, MenuOption, Backdrop, Menu, MenuOptionText };
