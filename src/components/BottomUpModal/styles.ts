import { Dimensions } from "react-native";
import styled from "styled-components/native";
import colors from "../../styles/colors";

const ModalContainer = styled.TouchableOpacity`
  z-index: 2;
  background-color: ${colors.TRANSPARENT_GREY};
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  justify-content: flex-end;
`;

const ModalWrap = styled.View`
  width: ${Dimensions.get("window").width}px;
  background-color: ${colors.WHITE};
  padding: 10px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  z-index: 5;
`;

export { ModalContainer, ModalWrap };
