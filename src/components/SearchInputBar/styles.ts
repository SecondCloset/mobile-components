import styled from "styled-components/native";
import COLORS from "../../styles/colors";

interface ContainerProps {
  listVisible?: boolean;
  backgroundColor?: string;
}

export const Container = styled.View<ContainerProps>`
  position: relative;
  width: 100%;
  border-width: 1px;
  border-radius: 5px;
  border-color: ${COLORS.GREY_LIGHT};
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  border-bottom-width: ${props => (props.listVisible ? 0 : 1)}px;
  border-bottom-left-radius: ${props => (props.listVisible ? 0 : 5)}px;
  border-bottom-right-radius: ${props => (props.listVisible ? 0 : 5)}px;
  z-index: 5000;
  background: ${props => props.backgroundColor || "white"};
`;

interface InputBarProps {
  listVisible?: boolean;
}

export const InputBar = styled.TouchableOpacity<InputBarProps>`
  flex-direction: row;
  padding: 5px 0;
  border-bottom-color: ${COLORS.GREY_MID};
  border-bottom-width: ${props => (props.listVisible ? 1 : 0)}px;
  align-items: center;
`;

export const InputText = styled.TextInput`
  font-weight: 300;
  padding-left: 10px;
  width: 95%;
`;

export const SearchResultRow = styled.TouchableOpacity`
  padding: 5px 0 15px;
  flex-direction: row;
  width: 100%;
`;

interface HighlightedTextProps {
  isBlack?: boolean;
}

export const HighlightedText = styled.Text<HighlightedTextProps>`
  font-weight: ${props => (props.isBlack ? "400" : "300")};
  color: ${props => (props.isBlack ? COLORS.BLACK : COLORS.GREY)};
`;

interface ResultsContainerProps {
  backgroundColor?: string;
}

export const ResultsContainer = styled.ScrollView<ResultsContainerProps>`
  position: absolute;
  top: 50px;
  left: -1px;
  right: -1px;
  padding: 0 15px;
  border: 1px solid ${COLORS.GREY_LIGHT};
  border-top-width: 0px;
  border-radius: 5px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  background: ${props => props.backgroundColor || "white"};
  max-height: 165px;
`;

export const Loader = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;
