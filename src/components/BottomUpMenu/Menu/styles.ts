import styled from "styled-components/native";
import COLORS from "../../../styles/colors";

const ButtonContainer = styled.TouchableOpacity`
  background-color: ${COLORS.WHITE};
  border-radius: 10px;
  margin-top: 20px;
  padding: 20px 0;
  flex-direction: row;
  justify-content: center;
`;

const ButtonText = styled.Text`
  color: ${COLORS.CHARCOAL};
`;

const List = styled.View`
  background: white;
  border-radius: 10px;
`;

interface ListItemProps {
  isLast?: boolean;
}

const ListItem = styled.TouchableOpacity<ListItemProps>`
  border-bottom-width: ${props => (props.isLast ? "0px" : "1px")};
  border-color: ${COLORS.GREY_LIGHT};
  width: 100%;
  padding: 20px 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

interface ListItemTextProps {
  color?: string;
}

const ListItemText = styled.Text<ListItemTextProps>`
  color: ${props => props.color || COLORS.CHARCOAL};
`;

export { ButtonContainer, ButtonText, List, ListItem, ListItemText };
