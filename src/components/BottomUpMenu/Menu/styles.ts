import styled from "styled-components/native";
import colors from "../../../styles/colors";

const Container = styled.View``;

const ButtonContainer = styled.TouchableOpacity`
  background-color: ${colors.WHITE};
  border-radius: 10px;
  margin-top: 20px;
  padding: 20px 0;
  flex-direction: row;
  justify-content: center;
`;

const ButtonText = styled.Text`
  color: ${colors.CHARCOAL};
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
  border-color: ${colors.GREY_LIGHT};
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
  color: ${props => props.color || colors.CHARCOAL};
`;

export { Container, ButtonContainer, ButtonText, List, ListItem, ListItemText };
