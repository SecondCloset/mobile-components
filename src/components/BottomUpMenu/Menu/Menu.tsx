import React from "react";
import {
  Container,
  ButtonContainer,
  ButtonText,
  List,
  ListItem,
  ListItemText,
} from "./styles";
import { Option } from "../BottomUpMenu";

interface MenuProps {
  options: Option[];
  onHide: () => void;
}

const Menu: React.FC<MenuProps> = props => {
  const renderList = () => {
    const { options } = props;
    return (
      <List>
        {options.map((option, index) => {
          const { label, onPress, textColor } = option;
          const isLast = index === options.length - 1;
          return (
            <ListItem onPress={onPress} isLast={isLast} key={label}>
              <ListItemText color={textColor}>{label}</ListItemText>
            </ListItem>
          );
        })}
      </List>
    );
  };

  const renderCancelButton = () => {
    return (
      <ButtonContainer onPress={props.onHide}>
        <ButtonText>Cancel</ButtonText>
      </ButtonContainer>
    );
  };

  return (
    <Container>
      {renderList()}
      {renderCancelButton()}
    </Container>
  );
};

Menu.propTypes = {};

export default Menu;
