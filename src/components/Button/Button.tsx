import React from "react";
import { ActivityIndicator } from "react-native";
import { Container, ButtonText, ButtonLoader } from "./styles";
import colors from "../../styles/colors";

export interface ButtonProps {
  disabled?: boolean;
  text: string;
  type?: "primary" | "outline";
  shape?: "rounded";
  width?: number | string;
  color?: "yellow" | "blue" | "red" | "yellowLight" | string;
  loading?: boolean;
  fontSize?: number;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = props => {
  const {
    disabled,
    text,
    type,
    loading,
    color,
    shape,
    onPress,
    fontSize,
    width,
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
      width={width}
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
