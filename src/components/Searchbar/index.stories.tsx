import React, { useState } from "react";
import { storiesOf } from "@storybook/react-native";
import { View, Text } from "react-native";
import Searchbar from "./Searchbar";

const db = [
  "apple",
  "banana",
  "blueberry",
  "orange",
  "pear",
  "peach",
  "strawberry",
  "grape",
  "blackcurrant",
  "blackberry",
  "pomegranate",
  "nectarine",
  "plum",
  "guava",
  "pineapple",
  "papaya",
  "grapefruit",
  "raspberry",
  "lemon",
  "lime",
  "cherry",
];

const SearchbarShowcase = props => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchFunction = async string => {
    setLoading(true);
    const emptyString = string.length === 0;
    if (emptyString) return setSearchResults([]);
    const lowerCaseRemovedSpaces = s => s.replace(/\s+/g, "").toLowerCase();
    const filteredResults = db.filter(option =>
      lowerCaseRemovedSpaces(option).includes(lowerCaseRemovedSpaces(string))
    );

    await new Promise(resolve => setTimeout(resolve, 500));
    setSearchResults(filteredResults);
    setLoading(false);
  };

  const createResultsArray = results => {
    return results.map(r => {
      return { label: r, value: r };
    });
  };

  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 20,
      }}
    >
      <Searchbar
        searchFunction={searchFunction}
        searchResults={createResultsArray(searchResults)}
        placeholder="Search for a fruit..."
        loading={loading}
        onOptionSelect={value => {
          console.log(`${value} selected.`);
        }}
      />
      <Text>content</Text>
      <Text>content</Text>
      <Text>content</Text>
      <Text>content</Text>
    </View>
  );
};

storiesOf("Searchbar", module).add("default", () => <SearchbarShowcase />);
