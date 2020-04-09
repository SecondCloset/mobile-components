import React from "react";
import { ActivityIndicator } from "react-native";
import { Container, ButtonText, ButtonLoader } from "./styles";
import COLORS from "../../styles/colors";

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

const Button: React.FC<ButtonProps> = ({
  disabled,
  text,
  type,
  loading,
  color,
  shape,
  onPress,
  fontSize,
  width,
}) => (
  <Container
    disabled={disabled || loading}
    color={color}
    type={type}
    shape={shape}
    onPress={onPress}
    width={width}
  >
    {loading ? (
      <ActivityIndicator size={"small"} color={COLORS.GREY} />
    ) : (
      <ButtonText
        disabled={disabled}
        color={color}
        type={type}
        fontSize={fontSize}
      >
        {text}
      </ButtonText>
    )}
  </Container>
);

export default Button;
