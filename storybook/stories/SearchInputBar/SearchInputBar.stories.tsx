import React, { useState } from "react";
import { storiesOf } from "@storybook/react-native";
import { Text } from "react-native";
import SearchInputBar from "../../../src/components/SearchInputBar";
import CenterView from "../../../src/components/CenterView";

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

const SearchInputBarShowcase = (props) => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const [timer, setTimer] = useState<number>();

  const lowerCaseRemovedSpaces = (s: string) => {
    return s.replace(/\s+/g, "").toLowerCase();
  };

  const fetchDataFromBackend = async (v: string) => {
    setLoading(true);
    if (!v.trim()) {
      setSearchResults([]);
      setLoading(false);
    }
    await new Promise((resolve) => setTimeout(resolve, 500));

    const filteredResults = db.filter((option) =>
      lowerCaseRemovedSpaces(option).includes(lowerCaseRemovedSpaces(v))
    );
    setSearchResults(filteredResults);
    setLoading(false);
  };

  const createResultsArray = (results) => {
    return results.map((r) => {
      return { label: r, value: r };
    });
  };

  return (
    <>
      <SearchInputBar
        value={value}
        onChange={(v) => {
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
    </>
  );
};

storiesOf("SearchInputBar", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("default", () => <SearchInputBarShowcase />)
  .add("with BG color", () => (
    <SearchInputBarShowcase backgroundColor="#FFECAD" />
  ))
  .add("with initial value", () => (
    <SearchInputBarShowcase value="hello bro" />
  ));
