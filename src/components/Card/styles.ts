import styled from "styled-components/native";
import colors from "../../styles/colors";

interface ContainerProps {
  type?: string;
}

const Container = styled.View<ContainerProps>`
  width: 100%;
  background-color: ${colors.WHITE};
  border-color: ${colors.GREY_MID};
  border-radius: 8px;
  border-width: 1px;
  box-shadow: 0px 2px 3.84px
    ${props => (props.type === "box" ? colors.GREY : colors.TRANSPARENT)};
  shadow-opacity: 0.25;
  elevation: 5;
`;

export { Container };
