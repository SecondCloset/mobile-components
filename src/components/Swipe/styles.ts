import styled from "styled-components/native";
import colors from "styles/colors";

interface SwipeWrapperProps {
  totalWidth?: number;
  backgroundColor?: string;
  borderColor?: string;
}

export const SwipeWrapper = styled.View<SwipeWrapperProps>`
  border-radius: 50px;
  border-width: 1px;
  justify-content: center;
  margin: 5px;
  width: ${(props) => (props.totalWidth ? `${props.totalWidth}px` : "auto")};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : colors.WHITE};
  border-color: ${(props) =>
    props.borderColor ? props.borderColor : colors.GREY_LIGHT};
`;

interface TitleProps {
  color?: string;
  fontSize?: number;
}

export const Title = styled.Text<TitleProps>`
  position: absolute;
  align-self: center;
  left: 56px;
  color: ${(props) => (props.color ? props.color : colors.CHARCOAL)};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : "20px")};
`;
