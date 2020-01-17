import styled from "styled-components/native";
import colors from "../../../styles/colors";
const DEFAULT_FONT_SIZE = 18;

const OptionListContainer = styled.View`
  border: 1px solid ${colors.GREY_MID};
  border-radius: 4px;
`;

interface OptionButtonProps {
  isLast: boolean;
}

const OptionButton = styled.TouchableOpacity<OptionButtonProps>`
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: ${props =>
    props.isLast ? colors.TRANSPARENT : colors.GREY_MID};
  background: white;
  border-radius: 4px;
`;

interface OptionButtonTextProps {
  fontSize?: number;
}

const OptionButtonText = styled.Text<OptionButtonTextProps>`
  color: ${colors.BLUE};
  font-size: ${props => props.fontSize || DEFAULT_FONT_SIZE}px;
`;

export { OptionListContainer, OptionButton, OptionButtonText };
