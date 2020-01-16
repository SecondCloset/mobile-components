import React from "react";
import { ActivityIndicator } from "react-native";
import { Container, ButtonText, ButtonLoader } from "./styles";
import colors from "../../styles/colors";

interface ButtonProps {
  disabled?: boolean;
  text: string;
  type?: "primary" | "outline";
  shape?: "rounded";
  color?: "yellow" | "blue" | "red" | string;
  loading?: boolean;
  fontSize?: number;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = props => {
  const {
    disabled,
    text,
    type = "default",
    loading,
    color = "blue",
    shape,
    onPress,
    fontSize = 18,
  } = props;

  if (loading)
    return (
      <ButtonLoader>
        <ActivityIndicator size={"small"} color={colors.GREY} />
      </ButtonLoader>
    );

  return (
    <Container
      disabled={disabled}
      color={color}
      type={type}
      shape={shape}
      onPress={onPress}
    >
      <ButtonText
        disabled={disabled}
        color={color}
        type={type}
        fontSize={fontSize}
      >
        {text}
      </ButtonText>
    </Container>
  );
};

export default Button;
