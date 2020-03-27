import styled from "styled-components/native";
import COLORS from "../../../styles/colors";

export const Container = styled.View`
  display: flex;
  flex-direction: row;
`;

interface ToggleButtonProps {
  selected: boolean;
  isFirst?: boolean;
}

export const ToggleButton = styled.TouchableOpacity<ToggleButtonProps>`
  border-bottom-width: 8px;
  border-bottom-color: ${props =>
    props.selected ? COLORS.BLUE : COLORS.GREY_LIGHT};
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-right-width: 1px;
  border-right-color: ${props =>
    props.isFirst ? COLORS.GREY_MID : COLORS.TRANSPARENT};
`;

export const ToggleButtonText = styled.Text<ToggleButtonProps>`
  color: ${props => (props.selected ? COLORS.BLUE : COLORS.GREY)};
`;
