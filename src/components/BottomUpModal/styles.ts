import { Dimensions } from "react-native";
import styled from "styled-components/native";
import colors from "../../styles/colors";

//interface
interface ModalWrapProp {
  visible: boolean;
}

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

const ModalContainer = styled.TouchableOpacity`
  width: ${Dimensions.get("window").width}px;
  z-index: 2;
  background-color: ${colors.TRANSPARENT};
  position: absolute;
  bottom: 0px;
  justify-content: flex-end;
`;

const ModalWrap = styled.View<ModalWrapProp>`
  width: ${Dimensions.get("window").width}px;
  background-color: ${colors.WHITE};
  padding: 10px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

export { ModalContainer, ModalWrap, Backdrop };
