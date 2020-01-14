import styled from "styled-components/native";
import colors from "../../styles/colors";

interface ContainerProps {
  type?: string;
}

const Container = styled.View<ContainerProps>`
  width: 100%;
  background-color: ${colors.WHITE};
  border-color: ${colors.GREY_MID};
  border-radius: 8;
  border-width: 1;
  shadow-color: ${props =>
    props.type === "box" ? colors.GREY : colors.TRANSPARENT};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84;
  elevation: 5;
`;

export { Container };
