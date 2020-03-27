import styled from "styled-components/native";

interface ContainerProps {
  isAbsolute?: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 50px;
  height: 50px;
  position: ${props => (props.isAbsolute ? "absolute" : "relative")};
  top: ${props => (props.isAbsolute ? "15px" : "0px")};
  left: ${props => (props.isAbsolute ? "15px" : "0px")};
  z-index: 2;
`;
