import { Dimensions } from "react-native";
import styled from "styled-components/native";
import COLORS from "../../styles/colors";
import { getStatusBarHeight } from "react-native-status-bar-height";

export const DrawerContainer = styled.View`
  z-index: 5000;
  position: absolute;
  background: ${COLORS.TRANSPARENT_GREY};
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  justify-content: flex-end;
`;

export const DrawerWrap = styled.View`
  height: ${Dimensions.get("window").height}px;
  width: ${Dimensions.get("window").width}px;
  background-color: transparent;
  z-index: 5;
`;

interface DrawerContentWrapperProps {
  backgroundColor?: string;
}

export const DrawerContentWrapper = styled.View<DrawerContentWrapperProps>`
  width: 100%;
  flex: 1;
  padding-top: ${getStatusBarHeight()}px;
  background: ${props => props.backgroundColor || "white"};
`;

interface DrawerClosetButtonWrapProps {
  closeButtonPosition: "left" | "right";
}

export const DrawerClosetButtonWrap = styled.View<DrawerClosetButtonWrapProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${props =>
    props.closeButtonPosition === "right" ? "flex-end" : "flex-start"};
  position: absolute;
  left: 0;
  right: 0;
  top: ${getStatusBarHeight()}px;
  z-index: 2;
`;

export const DrawerClosetButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface ClosetAreaProps {
  width: number;
}

export const ClosetArea = styled.TouchableOpacity<ClosetAreaProps>`
  flex: 1;
  width: ${props => props.width}px;
  background: ${COLORS.TRANSPARENT};
`;
