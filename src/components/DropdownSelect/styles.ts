import styled from "styled-components/native";
import { DropdownSelectProps } from "./DropdownSelect";

interface ContainerProps {
  width?: DropdownSelectProps["width"];
}

const getWidth = (width?: ContainerProps["width"]): string => {
  if (!width) return "100%";
  if (typeof width === "string") return width;
  return `${width}px`;
};

const Container = styled.View<ContainerProps>`
  z-index: 5000;
  width: ${props => getWidth(props.width)};
`;

const OptionListAnimateContainer = styled.View`
  overflow: hidden;
  position: absolute;
  top: 50px;
  left: 0px;
  right: 0px;
`;

export { Container, OptionListAnimateContainer };
