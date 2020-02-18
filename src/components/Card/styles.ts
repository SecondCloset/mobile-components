import styled from "styled-components/native";
import colors from "../../styles/colors";
import { CardProps } from "./Card";

interface ContainerProps {
  withShadow?: CardProps["withShadow"];
  withBorder?: CardProps["withBorder"];
}

const Container = styled.View<ContainerProps>`
  width: 100%;
  background-color: ${colors.WHITE};
  border-color: ${colors.GREY_MID};
  border-radius: 8px;
  border-width: ${props => (props.withBorder ? 1 : 0)}px;
  box-shadow: 0px 2px 3.84px
    ${props => (props.withShadow ? colors.GREY : colors.TRANSPARENT)};
  shadow-opacity: 0.25;
  elevation: 5;
`;

export { Container };
