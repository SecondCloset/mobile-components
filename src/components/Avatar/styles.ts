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

export const InitialsWrapper = styled.View<AvatarWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  background-color: ${props =>
    props.color ? props.color : sample(avatarColors)};
  min-width: 40px;
  max-width: 40px;
  min-height: 40px;
  max-height: 40px;
`;

export const Initials = styled.Text`
  color: ${colors.WHITE};
  font-size: 16px;
  font-weight: 700;
`;

export const NameWrapper = styled.View`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 0 0 0 8px;
`;

export const Name = styled.Text`
  font-size: 16px;
  font-weight: 300;
`;
