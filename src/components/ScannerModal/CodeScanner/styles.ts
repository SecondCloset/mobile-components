import styled from "styled-components/native";
import COLORS from "../../../styles/colors";
import { BarCodeScanner } from "expo-barcode-scanner";

export const Container = styled.View`
  width: 100%;
  flex: 1;
`;

export const Scanner = styled(BarCodeScanner)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
`;

export const ScannerSquare = styled.View`
  width: 150px;
  height: 150px;
  border: 1px solid ${COLORS.YELLOW};
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
