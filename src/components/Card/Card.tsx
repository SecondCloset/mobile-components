import React from "react";
import { Container } from "./styles";

export interface CardProps {
  withShadow?: boolean;
  withBorder?: boolean;
  children: any;
}

const Card: React.FC<CardProps> = props => {
  return (
    <Container withShadow={props.withShadow} withBorder={props.withBorder}>
      {props.children}
    </Container>
  );
};

export default Card;
