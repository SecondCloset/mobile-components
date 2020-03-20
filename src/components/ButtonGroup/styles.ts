import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.View`
  border-radius: 5px;
  border: 1px solid ${colors.BLUE};
  flex-direction: row;
  overflow: hidden;
`;

interface ButtonProps {
  selected?: boolean;
  isFirst?: boolean;
}

export const Button = styled.TouchableOpacity<ButtonProps>`
  background-color: ${props => (props.selected ? colors.BLUE : colors.WHITE)};
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-left-width: ${props => (props.isFirst ? "0" : "1px")};
  border-color: ${colors.BLUE};
`;

export const ButtonText = styled.Text<ButtonProps>`
  color: ${props => (props.selected ? colors.WHITE : colors.BLUE)};
  font-size: 10px;
  margin: 1px;
  font-weight: 500;
  text-align: center;
`;

export const TitleText = styled(ButtonText)`
  font-size: 12px;
`;
