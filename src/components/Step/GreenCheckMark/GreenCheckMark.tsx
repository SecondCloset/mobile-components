import React from "react";

//components
import { AntDesign } from "@expo/vector-icons";

//styles
import { Container } from "./styles";
import COLORS from "../../../styles/colors";

export interface GreenCheckMarkProps {
  size?: "small" | "medium" | "large";
  isOutlined?: boolean;
  isGreenBackground?: boolean;
}

const GreenCheckMark: React.FC<GreenCheckMarkProps> = props => {
  const getIconSize = () => {
    switch (props.size) {
      case "small":
        return 10;
      case "large":
        return 30;
      case "medium":
      default:
        return 20;
    }
  };

  return (
    <Container {...props}>
      <AntDesign
        color={props.isGreenBackground ? COLORS.WHITE : COLORS.GREEN}
        name="check"
        size={getIconSize()}
      />
    </Container>
  );
};

export default GreenCheckMark;
