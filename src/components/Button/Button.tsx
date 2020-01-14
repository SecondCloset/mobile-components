import React from "react";
import { Container, ButtonText, ButtonLoader } from "./styles";
import { Bubbles } from "react-native-loader";
import colors from "../../styles/colors";

interface ButtonProps {
  disabled?: boolean;
  text: string;
  type?: string;
  shape?: string;
  color?: string;
  loading?: boolean;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = props => {
  const { disabled, text, type, loading, color, shape } = props;

  if (loading)
    return (
      <ButtonLoader>
        <Bubbles size={5} color={colors.GREY} />
      </ButtonLoader>
    );

  return (
    <Container disabled={disabled} color={color} type={type} shape={shape}>
      <ButtonText disabled={disabled} color={color} type={type}>
        {text.toUpperCase()}
      </ButtonText>
    </Container>
  );
};

export default Button;
