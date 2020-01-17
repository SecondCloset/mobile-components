import styled from "styled-components/native";

interface ContainerProps {
  type?: string;
}

const Container = styled.View<ContainerProps>`
  display: flex;
  flex: 1;
`;

const OptionListAnimateContainer = styled.View`
  margin-top: 10px;
  overflow: hidden;
`;

export { Container, OptionListAnimateContainer };
