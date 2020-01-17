import styled from "styled-components/native";
import colors from "../../../styles/colors";
const DEFAULT_FONT_SIZE = 18;

interface ButtonProps {
  width: number;
}

const Button = styled.TouchableOpacity<ButtonProps>`
  width: ${props => props.width}px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 4px;
  border: 1px solid ${colors.GREY_MID};
  align-items: center;
  background: white;
`;

interface ButtonTextProps {
  fontSize?: number;
  isCharcoal: boolean;
}

const ButtonText = styled.Text<ButtonTextProps>`
  color: ${props => (props.isCharcoal ? colors.CHARCOAL : colors.GREY)};
  font-size: ${props => props.fontSize || DEFAULT_FONT_SIZE}px;
`;

export { Button, ButtonText };
