import React from "react";
import { Button, ButtonText } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../../styles/colors";

interface DropdownButtonProps {
  width: number;
  buttonText?: string;
  fontSize?: number;
  onPress: () => void;
  placeholder?: string;
}

const DropdownButton: React.FC<DropdownButtonProps> = props => {
  const {
    width = 200,
    buttonText,
    fontSize,
    onPress,
    placeholder = "-----------",
  } = props;

  const isCharcoal = !!buttonText;

  return (
    <Button width={width} onPress={onPress}>
      <ButtonText fontSize={fontSize} isCharcoal={isCharcoal}>
        {buttonText || placeholder}
      </ButtonText>
      <AntDesign name="down" size={15} color={colors.BLUE} />
    </Button>
  );
};

export default DropdownButton;
