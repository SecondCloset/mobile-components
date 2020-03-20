import React, { useState } from "react";
import { storiesOf } from "@storybook/react-native";
import { View, Text } from "react-native";
import ButtonGroup from "./ButtonGroup";

interface Option {
  text: string;
  subtext?: string;
}

interface ButtonGroupProps {
  options: Option[];
}

const ButtonGroupShowcase: React.FC<ButtonGroupProps> = props => {
  const [selectedOption, setSelectedOption] = useState<string>();
  const { options } = props;

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
          defaultValue={selectedOption}
          onOptionSelect={setSelectedOption}
        />
      </View>

      {selectedOption && (
        <Text>
          {selectedOption === "Mrs. Nesbitt"
            ? "Great answer!"
            : "I guess he's pretty cool.."}
        </Text>
      )}
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
  },
  {
    text: "Sheriff Woody",
    subtext: 'Cowboy "Action Figure"',
  },
];

storiesOf("ButtonGroup", module)
  .add("default", () => <ButtonGroupShowcase options={options1} />)
  .add("with 3 options", () => <ButtonGroupShowcase options={options2} />);
