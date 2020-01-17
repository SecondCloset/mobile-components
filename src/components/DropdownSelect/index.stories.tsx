import React, { useState } from "react";
import { storiesOf } from "@storybook/react-native";
import CenterView from "../CenterView";
import { View, Text } from "react-native";
import DropdownSelect from "./DropdownSelect";

const DropdownSelectShowcase = () => {
  const [selectedKey, setSelectedKey] = useState(null);
  const options = [
    { key: "1", name: "Apple", value: "apple" },
    { key: "2", name: "Banana", value: "banana" },
    { key: "3", name: "Orange", value: "orange" },
  ];

  return (
    <DropdownSelect
      onSelect={(key, value) => {
        setSelectedKey(key);
      }}
      selectedKey={selectedKey}
      options={options}
      fontSize={16}
      placeholder="Please select a fruit"
      width={250}
    />
  );
};

storiesOf("DropdownSelect", module).add("Default", () => (
  <View
    style={{
      flex: 1,
      width: "100%",
      alignItems: "center",
      justifyContent: "flex-start",
    }}
  >
    <DropdownSelectShowcase />
    <Text>content</Text>
    <Text>content</Text>
    <Text>content</Text>
    <Text>content</Text>
  </View>
));
