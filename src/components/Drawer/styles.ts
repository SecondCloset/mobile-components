import { Dimensions } from "react-native";
import styled from "styled-components/native";
import colors from "../../styles/colors";

const DrawerContainer = styled.View`
  z-index: 5000;
  position: absolute;
  background: ${colors.TRANSPARENT_GREY};
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  justify-content: flex-end;
`;

const DrawerWrap = styled.View`
  height: 100%;
  width: ${Dimensions.get("window").width}px;
  background-color: transparent;
  z-index: 5;
`;

interface DrawerClosetButtonWrapProps {
  closeButtonPosition: "left" | "right";
}

const DrawerClosetButtonWrap = styled.SafeAreaView<DrawerClosetButtonWrapProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${props =>
    props.closeButtonPosition === "right" ? "flex-end" : "flex-start"};
  position: absolute;
  left: 0;
  right: 0;
  z-index: 2;
`;

const DrawerClosetButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export {
  DrawerContainer,
  DrawerWrap,
  DrawerClosetButton,
  DrawerClosetButtonWrap,
};
