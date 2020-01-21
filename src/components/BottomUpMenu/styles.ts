import { Dimensions } from "react-native";
import styled from "styled-components/native";
import colors from "../../styles/colors";

const Backdrop = styled.View`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: ${colors.TRANSPARENT_GREY};
  justify-content: flex-end;
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
