import styled from "styled-components/native";
import COLORS from "../../../styles/colors";
import { DropdownButtonProps } from "./DropdownButton";
const DEFAULT_FONT_SIZE = 18;

const Button = styled.TouchableOpacity`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 4px;
  border: 1px solid ${COLORS.GREY_MID};
  align-items: center;
  background: white;
`;

interface ButtonTextProps {
  fontSize?: DropdownButtonProps["fontSize"];
  isCharcoal: boolean;
}

const ButtonText = styled.Text<ButtonTextProps>`
  color: ${props => (props.isCharcoal ? COLORS.CHARCOAL : COLORS.GREY)};
  font-size: ${props => props.fontSize || DEFAULT_FONT_SIZE}px;
`;

export { Button, ButtonText };
