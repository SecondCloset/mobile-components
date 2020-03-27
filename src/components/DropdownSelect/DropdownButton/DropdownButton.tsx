import React from "react";
import { Button, ButtonText } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import COLORS from "../../../styles/colors";
import { DropdownSelectProps } from "../DropdownSelect";

export interface DropdownButtonProps {
  fontSize?: DropdownSelectProps["fontSize"];
  placeholder?: DropdownSelectProps["placeholder"];
  onPress: () => void;
  buttonText?: string;
}

const DropdownButton: React.FC<DropdownButtonProps> = props => {
  const { buttonText, fontSize, onPress, placeholder = "-----------" } = props;
  const isCharcoal = !!buttonText;
  return (
    <Button onPress={onPress}>
      <ButtonText fontSize={fontSize} isCharcoal={isCharcoal}>
        {buttonText || placeholder}
      </ButtonText>
      <AntDesign name="down" size={15} color={COLORS.BLUE} />
    </Button>
  );
};

export default DropdownButton;
