import styled from "styled-components/native";
import colors from "../../../styles/colors";

export const Container = styled.View`
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${colors.TRANSPARENT_GREY};
  z-index: 100;
`;

export const LoadingText = styled.Text`
  color: white;
  margin-top: 20px;
  font-size: 15px;
`;
