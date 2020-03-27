import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import COLORS from "../../../styles/colors";

export const Container = styled.View`
  width: 100%;
  background: ${COLORS.TRANSPARENT};
  flex: 1;
  padding: ${getStatusBarHeight()}px 20px 0px;
  align-items: center;
`;

export const CloseButton = styled.TouchableOpacity`
  align-self: flex-start;
  padding: 10px;
`;

export const ErrorMessageWrap = styled.View`
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background: white;
`;

export const ErrorMessageText = styled.Text`
  color: ${COLORS.GREY};
`;

export const Footer = styled.View`
  width: 100%;
  flex: 0.3;
  background: black;
  justify-content: center;
  align-items: center;
`;

export const SnapButtonWrap = styled.TouchableOpacity`
  width: 80px;
  height: 80px;
  border-radius: 100px;
  background: ${COLORS.WHITE};
  justify-content: center;
  align-items: center;
`;

export const SnapButtonInnerWrap = styled.View`
  width: 90%;
  height: 90%;
  border-radius: 100px;
  background: ${COLORS.WHITE};
  border: 3px solid black;
`;
