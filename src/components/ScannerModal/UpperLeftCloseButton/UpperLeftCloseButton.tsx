import React from "react";
import { Container } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import COLORS from "../../../styles/colors";

interface UpperLeftCloseButtonProps {
  onPress: () => any;
  color?: string;
  isAbsolute?: boolean;
}

const UpperLeftCloseButton: React.FC<UpperLeftCloseButtonProps> = props => {
  return (
    <Container onPress={props.onPress} isAbsolute={props.isAbsolute}>
      <AntDesign
        name="close"
        size={32}
        color={props.color || COLORS.CHARCOAL}
      />
    </Container>
  );
};

export default UpperLeftCloseButton;
