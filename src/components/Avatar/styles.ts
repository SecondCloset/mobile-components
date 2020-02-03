import styled from "styled-components/native";

// Constants
import colors from "../../styles/colors";

// Helpers
import { sample } from "lodash";

export const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  flex: 1;
  max-height: 40px;
`;

export const avatarColors = [
  "#b83b5e",
  "#f25d9c",
  "#f08a5d",
  "#49db86",
  "#1fab89",
  "#6639a6",
  "#3ec1d3",
  "#3490de",
  "#005691",
];

interface AvatarWrapperProps {
  color?: string;
}

export const AvatarWrapper = styled.View<AvatarWrapperProps>`
  padding: 10px;
  border-radius: 25px;
  background-color: ${props =>
    props.color ? props.color : sample(avatarColors)};
`;

export const TextWrapper = styled.View`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 0 0 0 16px;
`;

export const Initials = styled.Text`
  color: ${colors.WHITE};
  font-size: 16px;
  font-weight: 700;
`;

export const Name = styled.Text`
  font-size: 16px;
  font-weight: 300;
`;
