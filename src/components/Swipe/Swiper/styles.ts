import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import colors from "styles/colors";

export const borderWidth = 3;
export const margin = 1;
const maxContainerHeight = 50;

export const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
    alignSelf: "flex-start",
    borderRadius: maxContainerHeight / 2,
    borderRightWidth: 0,
    borderWidth,
    margin,
  },
  containerRTL: {
    alignItems: "flex-start",
    alignSelf: "flex-end",
    borderRadius: maxContainerHeight / 2,
    borderLeftWidth: 0,
    borderWidth,
    margin,
  },
});

interface ViewProps {
  height?: number;
  iconWidth?: number;
  backgroundColor?: string;
  borderColor?: string;
}

export const SwipeIcon = styled.View<ViewProps>`
  align-items: center;
  justify-content: center;
  margin: ${`${-borderWidth}px`} 0;
  height: ${(props) => (props.height ? `${props.height}px` : "auto")};
  width: ${(props) => (props.iconWidth ? `${props.iconWidth}px` : "auto")};
  background-color: ${(props) =>
    props.backgroundColor ? `${props.backgroundColor}` : colors.TRANSPARENT};
  border-color: ${(props) =>
    props.borderColor ? `${props.borderColor}` : colors.TRANSPARENT};
  border-radius: ${`${maxContainerHeight / 2}px`};
  border-width: 2px;
  overflow: hidden;
`;

export const DefaultSwipeIcon = styled.View`
  width: 50px;
  height: 50px;
  border-radius: ${`${100 / 2}px`};
  background-color: ${colors.GREEN};
`;
