import React, { useState } from "react";
import { storiesOf } from "@storybook/react-native";
import { View, Text } from "react-native";
import SearchBar from "./SearchBar";

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

const SearchBarShowcase = props => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const [timer, setTimer] = useState();

  const lowerCaseRemovedSpaces = (s: string) => {
    return s.replace(/\s+/g, "").toLowerCase();
  };

  const fetchDataFromBackend = async (v: string) => {
    setLoading(true);
    if (!v.trim()) {
      setSearchResults([]);
      setLoading(false);
    }
    await new Promise(resolve => setTimeout(resolve, 500));

    const filteredResults = db.filter(option =>
      lowerCaseRemovedSpaces(option).includes(lowerCaseRemovedSpaces(v))
    );
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
        padding: 20,
      }}
    >
      <SearchBar
        value={value}
        onChange={v => {
          setValue(v);
          clearTimeout(timer);
          const newTimer = setTimeout(() => fetchDataFromBackend(v), 500);
          setTimer(newTimer);
        }}
        searchResults={createResultsArray(searchResults)}
        placeholder="Search for a fruit..."
        backgroundColor={props.backgroundColor}
        loading={loading}
        onOptionSelect={({ label }) => {
          setValue(label);
        }}
      />
      <Text>content</Text>
      <Text>content</Text>
      <Text>content</Text>
      <Text>content</Text>
    </View>
  );
};

storiesOf("SearchBar", module)
  .add("default", () => <SearchBarShowcase />)
  .add("with BG color", () => <SearchBarShowcase backgroundColor="#FFECAD" />)
  .add("with initial value", () => <SearchBarShowcase value="hello bro" />);
