import React, { useState } from "react";
import { storiesOf } from "@storybook/react-native";
import { Text } from "react-native";
import DropdownSelect from "../../../src/components/DropdownSelect";
import CenterView from "../../../src/components/CenterView";

const DropdownSelectShowcase = (props) => {
  const [selectedKey, setSelectedKey] = useState(null);
  const options = [
    { key: "1", name: "Apple", value: "apple" },
    { key: "2", name: "Banana", value: "banana" },
    { key: "3", name: "Orange", value: "orange" },
  ];

  return (
    <CenterView>
      <DropdownSelect
        onSelect={(key, value) => {
          setSelectedKey(key);
        }}
        selectedKey={selectedKey}
        options={options}
        fontSize={16}
        placeholder="Please select a fruit"
        width={props.width}
      />
      <Text>content</Text>
      <Text>content</Text>
      <Text>content</Text>
      <Text>content</Text>
    </CenterView>
  );
};

storiesOf("DropdownSelect", module)
  .add("80% width", () => <DropdownSelectShowcase width="80%" />)
  .add("no width", () => <DropdownSelectShowcase />)
  .add("250 width", () => <DropdownSelectShowcase width={250} />);
