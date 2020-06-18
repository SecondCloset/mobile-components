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
  justify-content: center;
  padding: 10px 15px ${props => (props.listVisible ? "2px" : "")};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
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
  padding: 5px 0 0;
  background: ${props => props.backgroundColor || "white"};
  max-height: 165px;
`;

export const Loader = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;
