import styled from "styled-components/native";
import colors from "../../styles/colors";

interface SwipeWrapperProps {
  totalWidth?: number | string;
  backgroundColor?: string;
  borderColor?: string;
}

export const SwipeWrapper = styled.View<SwipeWrapperProps>`
  justify-content: center;
  border-radius: 4px;
  border-width: 1px;
  width: ${(props) => {
    if (props.totalWidth) {
      if (typeof props.totalWidth === "number") return `${props.totalWidth}px`;
      if (typeof props.totalWidth === "string") return props.totalWidth;
    }
    return "auto";
  }};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : colors.WHITE};
  border-color: ${(props) =>
    props.borderColor ? props.borderColor : colors.GREEN};
`;

interface TitleProps {
  color?: string;
  fontSize?: number;
  width?: number;
}

export const Title = styled.Text<TitleProps>`
  position: absolute;
  align-self: center;
  left: ${(props) => (props.width ? `${props.width + 8}px` : "40px")};
  right: ${(props) => (props.width ? `${props.width / 2}px` : "20px")};
  max-height: ${(props) => (props.width ? `${props.width}px` : "40px")};
  text-align: center;
  color: ${(props) => (props.color ? props.color : colors.CHARCOAL)};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : "20px")};
`;
