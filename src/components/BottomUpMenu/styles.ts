import { Dimensions } from "react-native";
import styled from "styled-components/native";
import colors from "../../styles/colors";

const Backdrop = styled.View`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  background-color: ${colors.TRANSPARENT_GREY};
  width: ${Dimensions.get("window").width}px;
  height: ${Dimensions.get("window").height}px;
  justify-content: flex-end;
  flex: 1;
  color: blue;
`;

const AnimatedMenuContainer = styled.TouchableOpacity`
  width: ${Dimensions.get("window").width}px;
  z-index: 2;
  background-color: ${colors.TRANSPARENT};
  padding: 10px;
  position: absolute;
  bottom: 20px;
  overflow: hidden;
  justify-content: flex-end;
`;

export { Backdrop, AnimatedMenuContainer };
