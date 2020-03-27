import styled from "styled-components/native";
import COLORS from "../../../styles/colors";
const DEFAULT_FONT_SIZE = 18;

const OptionListContainer = styled.View`
  border: 1px solid ${COLORS.GREY_MID};
  border-radius: 4px;
  background: white;
  width: 100%;
`;

interface OptionButtonProps {
  isLast: boolean;
}

const OptionButton = styled.TouchableOpacity<OptionButtonProps>`
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: ${props =>
    props.isLast ? COLORS.TRANSPARENT : COLORS.GREY_MID};
  border-radius: 4px;
`;

interface OptionButtonTextProps {
  fontSize?: number;
}

const OptionButtonText = styled.Text<OptionButtonTextProps>`
  color: ${COLORS.BLUE};
  font-size: ${props => props.fontSize || DEFAULT_FONT_SIZE}px;
`;

export { OptionListContainer, OptionButton, OptionButtonText };
