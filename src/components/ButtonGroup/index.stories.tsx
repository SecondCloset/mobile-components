import React, { useState } from "react";
import { storiesOf } from "@storybook/react-native";
import { View, Text } from "react-native";
import ButtonGroup from "./ButtonGroup";

interface Option {
  text: string;
  subtext?: string;
  disabled?: boolean;
}

interface ButtonGroupProps {
  options: Option[];
}

const ButtonGroupShowcase: React.FC<ButtonGroupProps> = props => {
  const [selectedOptionText, setSelectedOptionText] = useState("");
  const { options } = props;

  const renderSelectedMessage = () => {
    if (!selectedOptionText) return null;
    return (
      <Text>
        {selectedOptionText === "Mrs. Nesbitt"
          ? "Great answer!"
          : "I guess he's pretty cool.."}
      </Text>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        padding: 20,
        alignItems: "center",
      }}
    >
      <Text>Who is your favorite character?</Text>

      <View
        style={{
          marginVertical: 20,
          width: "100%",
        }}
      >
        <ButtonGroup
          options={options}
          selectedOptionText={selectedOptionText}
          onOptionSelect={setSelectedOptionText}
        />
      </View>

      {renderSelectedMessage()}
    </View>
  );
};

const options1 = [
  {
    text: "Mrs. Nesbitt",
    subtext: "Delusional Tea Connoisseur",
  },
  {
    text: "Buzz Lightyear",
    subtext: "Flying Space Ranger Toy",
    disabled: true,
  },
];

const options2 = [
  {
    text: "Mrs. Nesbitt",
    subtext: "Delusional Tea Connoisseur",
  },
  {
    text: "Buzz Lightyear",
    subtext: "Flying Space Ranger Toy",
    disabled: true,
  },
  {
    text: "Sheriff Woody",
    subtext: 'Cowboy "Action Figure"',
  },
];

storiesOf("ButtonGroup", module)
  .add("default", () => <ButtonGroupShowcase options={options1} />)
  .add("with 3 options", () => <ButtonGroupShowcase options={options2} />);
