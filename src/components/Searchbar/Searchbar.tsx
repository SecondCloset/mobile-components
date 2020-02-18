import React, { useState } from "react";
import { ActivityIndicator } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../styles/colors";
import {
  Container,
  InputBar,
  InputText,
  SearchResultRow,
  HighlightedText,
  ResultsContainer,
  Loader,
} from "./styles";
import { isEmpty } from "lodash";

export interface Option {
  label: string;
  value: any;
}

export interface SearchbarProps {
  placeholder?: string;
  searchFunction: (value: string) => void;
  searchResults: Option[];
  loading?: boolean;
  onOptionSelect: (value: any) => void;
}

const SEARCH_DELAY_IN_MS = 200;

const Searchbar: React.FC<SearchbarProps> = props => {
  const {
    searchFunction,
    searchResults,
    onOptionSelect,
    placeholder = "Start typing something...",
    loading = false,
  } = props;
  const [timer, setTimer] = useState();
  const [textInput, setTextInput] = useState("");
  const [listVisible, setListVisible] = useState(false);

  const triggerSearch = text => {
    if (text.trim() === "") return setListVisible(false);
    clearTimeout(timer);
    const newTimer = setTimeout(
      () => searchFunction(text.trim()),
      SEARCH_DELAY_IN_MS
    );
    setTimer(newTimer);
  };

  const renderInputBar = () => {
    return (
      <InputBar listVisible={listVisible}>
        <AntDesign name="search1" size={18} color="black" />
        <InputText
          onChangeText={text => {
            setListVisible(true);
            setTextInput(text);
            triggerSearch(text);
          }}
          value={textInput}
          autoCorrect={false}
          clearButtonMode="while-editing"
          placeholder={placeholder}
          autoCapitalize="none"
        />
      </InputBar>
    );
  };

  const renderHighlightedResult = value => {
    const lettersArr = value.toLowerCase().split("");
    return lettersArr.map((l, i) => {
      return (
        <HighlightedText
          key={l + i}
          isBlack={textInput.toLowerCase().includes(l)}
        >
          {l}
        </HighlightedText>
      );
    });
  };

  const onResultPress = ({ label, value }) => {
    onOptionSelect(value);
    setTextInput(label.toLowerCase());
    setListVisible(false);
  };

  const renderSearchResults = () => {
    if (!listVisible) return null;
    const resultRows = searchResults.map((r, i) => {
      return (
        <SearchResultRow key={i} onPress={() => onResultPress(r)}>
          {renderHighlightedResult(r.label)}
        </SearchResultRow>
      );
    });
    const noResultsMessage = (
      <SearchResultRow key="no result" activeOpacity={1}>
        <HighlightedText>No Results Found</HighlightedText>
      </SearchResultRow>
    );
    const loadingCircle = (
      <SearchResultRow key="loading" activeOpacity={1}>
        <Loader>
          <ActivityIndicator size={"small"} color={colors.GREY} />
        </Loader>
      </SearchResultRow>
    );

    const noResults = !!textInput && isEmpty(searchResults);
    const renderContent = () => {
      if (loading) return loadingCircle;
      if (noResults) return noResultsMessage;
      return resultRows;
    };

    return (
      <ResultsContainer keyboardShouldPersistTaps="handled">
        {renderContent()}
      </ResultsContainer>
    );
  };

  return (
    <Container listVisible={listVisible}>
      {renderInputBar()}
      {renderSearchResults()}
    </Container>
  );
};

export default Searchbar;
