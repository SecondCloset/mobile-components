import React, { useState, useRef, useEffect } from "react";
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
import { TextInput } from "react-native";

export interface Option {
  label: string;
  value: any;
}

export interface SearchInputBarProps {
  value: string;
  onChange: (value: string) => any;
  placeholder?: string;
  searchResults: Option[];
  loading?: boolean;
  onOptionSelect: (option: Option) => any;
  backgroundColor?: string;
}

const SearchInputBar: React.FC<SearchInputBarProps> = props => {
  const {
    searchResults,
    onOptionSelect,
    loading = false,
    backgroundColor,
  } = props;
  const [listVisible, setListVisible] = useState(false);
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (!props.value.trim()) setListVisible(false);
  }, [props.value]);

  const renderInputBar = () => {
    return (
      <InputBar
        listVisible={listVisible}
        onPress={() => {
          inputRef?.current?.focus();
        }}
        activeOpacity={1}
      >
        <AntDesign name="search1" size={18} color="black" />
        <InputText
          ref={inputRef}
          onChangeText={(text: string) => {
            setListVisible(true);
            props.onChange(text);
          }}
          value={props.value}
          autoCorrect={false}
          clearButtonMode="while-editing"
          placeholder={props.placeholder || "Start typing something..."}
          autoCapitalize="none"
        />
      </InputBar>
    );
  };

  const renderHighlightedResult = (resultLabel: string) => {
    const lettersArr = resultLabel.toLowerCase().split("");
    return lettersArr.map((l, i) => {
      return (
        <HighlightedText
          key={l + i}
          isBlack={props.value.toLowerCase().includes(l)}
        >
          {l}
        </HighlightedText>
      );
    });
  };

  const onResultPress = (option: Option) => {
    onOptionSelect(option);
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

    const noResults = !!props.value.trim() && isEmpty(searchResults);
    const renderContent = () => {
      if (loading) return loadingCircle;
      if (noResults) return noResultsMessage;
      return resultRows;
    };

    return (
      <ResultsContainer
        keyboardShouldPersistTaps="handled"
        backgroundColor={backgroundColor}
      >
        {renderContent()}
      </ResultsContainer>
    );
  };

  return (
    <Container listVisible={listVisible} backgroundColor={backgroundColor}>
      {renderInputBar()}
      {renderSearchResults()}
    </Container>
  );
};

export default SearchInputBar;
