import styled from "styled-components/native";
import COLORS from "../../../styles/colors";

const DEFAULT_SIZE = 35;

//interface
import { GreenCheckMarkProps } from "./GreenCheckMark";

//helpers
const getSizePixels = (size: GreenCheckMarkProps["size"]) => {
  switch (size) {
    case "small":
      return 20;
    case "medium":
      return DEFAULT_SIZE;
    case "large":
      return 45;
    default:
      return DEFAULT_SIZE;
  }
};

interface ContainerProps {
  size?: GreenCheckMarkProps["size"];
  isOutlined?: GreenCheckMarkProps["isOutlined"];
  isGreenBackground?: GreenCheckMarkProps["isGreenBackground"];
}

export const Container = styled.View<ContainerProps>`
  width: ${props => getSizePixels(props.size)}px;
  height: ${props => getSizePixels(props.size)}px;
  background: ${props =>
    props.isGreenBackground ? COLORS.GREEN : COLORS.WHITE};
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  border: 1px solid
    ${props => (props.isOutlined ? COLORS.GREEN : COLORS.TRANSPARENT)};
`;
