import React from "react";
import { Container } from "./styles";

interface CardProps {
  type?: string;
  children: any;
}

const Card: React.FC<CardProps> = props => {
  return <Container type={props.type}>{props.children}</Container>;
};

export default Card;
