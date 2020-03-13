import React from "react";
import { Container, BoxShadowContainer } from "./styles";

export interface CardProps {
  withShadow?: boolean;
  withBorder?: boolean;
  children: any;
}

const Card: React.FC<CardProps> = props => {
  if (props.withShadow) {
    return (
      <BoxShadowContainer>
        <Container withBorder={props.withBorder}>{props.children}</Container>
      </BoxShadowContainer>
    );
  } else {
    return (
      <Container withBorder={props.withBorder}>{props.children}</Container>
    );
  }
};

export default Card;
