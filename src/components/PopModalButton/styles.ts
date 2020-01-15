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
interface MenuButtonTextProps {
  fontSize?: number | null;
}

interface MenuOptionProps {
  isLast?: boolean;
}

interface MenuOptionTextProps {
  color?: string;
}

const MenuButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: ${colors.TRANSPARENT};
`;

const MenuButtonText = styled.Text<MenuButtonTextProps>`
  font-size: ${props => props.fontSize || 18};
`;

const Backdrop = styled.View`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  background-color: ${colors.TRANSPARENT_GREY};
  width: ${Dimensions.get("window").width};
  height: ${Dimensions.get("window").height};
  justify-content: flex-end;
  flex: 1;
  border-width: 5;
  color: blue;
`;

const Menu = styled.TouchableOpacity`
  width: ${Dimensions.get("window").width};
  z-index: 2;
  background-color: ${colors.TRANSPARENT};
  padding: 30px 10px;
  position: absolute;
  bottom: 0px;
  justify-content: flex-end;
`;

const Container = styled.View`
  background-color: ${colors.WHITE};
  border-radius: 8;
  margin: 5px;
`;

const MenuOption = styled.TouchableOpacity<MenuOptionProps>`
  padding: 20px 0 0;
  border-bottom-width: ${props => (props.isLast ? 0 : 1)};
  border-bottom-color: ${colors.GREY_LIGHT};
  flex-direction: row;
  justify-content: center;
`;

const MenuOptionText = styled.Text<MenuOptionTextProps>`
  color: ${props => getTextColor(props.color)};
`;

export {
  Container,
  MenuOption,
  Backdrop,
  Menu,
  MenuButton,
  MenuOptionText,
  MenuButtonText,
};
