import React from "react";
import {
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

const Menu: React.FC<MenuProps> = (props) => {
  const renderList = () => {
    const { options } = props;
    return (
      <List>
        {options.map((option, index) => {
          const { label, onPress, textColor } = option;
          const isLast = index === options.length - 1;
          return (
            <ListItem
              onPress={() => {
                onPress && onPress();
                props.onHide();
              }}
              isLast={isLast}
              key={label}
              disabled={option?.disabled}
            >
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
    <>
      {renderList()}
      {renderCancelButton()}
    </>
  );
};

Menu.propTypes = {};

export default Menu;
