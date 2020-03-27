import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import COLORS from "../../styles/colors";

export const Container = styled.View`
  width: 100%;
  flex: 1;
`;

export const ModalHeader = styled.View`
  margin-top: ${getStatusBarHeight()}px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px 0;
  border-bottom-width: 1px;
  border-bottom-color: ${COLORS.GREY_MID};
`;

export const Title = styled.Text`
  font-size: 18px;
`;

export const Description = styled.Text`
  margin-top: 10px;
  color: ${COLORS.GREY};
  font-size: 12px;
`;

export const CodeInputWrap = styled.View`
  display: flex;
  align-self: center;
`;

export const CodeInputLabel = styled.Text`
  margin-top: 40px;
  color: ${COLORS.GREY};
`;

export const CodeInput = styled.TextInput`
  margin: 10px 0 20px;
  width: 200px;
  border-bottom-color: ${COLORS.GREEN};
  border-bottom-width: 1px;
  padding: 5px 0;
  color: ${COLORS.CHARCOAL};
`;

export const ModalBottomComponentContainer = styled.View`
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 2;
`;

export const LoaderContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 200;
  justify-content: center;
  align-items: center;
`;
