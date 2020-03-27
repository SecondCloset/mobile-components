import styled from "styled-components/native";
import COLORS from "../../styles/colors";
import { CardProps } from "./Card";

interface ContainerProps {
  withBorder?: CardProps["withBorder"];
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  background-color: ${COLORS.WHITE};
  border-color: ${COLORS.GREY_MID};
  border-radius: 8px;
  border-width: ${props => (props.withBorder ? 1 : 0)}px;
  elevation: 5;
  overflow: hidden;
`;

export const BoxShadowContainer = styled.View`
  box-shadow: 0px 2px 3.84px ${COLORS.GREY};
  shadow-opacity: 0.25;
  width: 100%;
`;
