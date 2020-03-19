import React, { useState } from "react";
import { Container, Button, ButtonText, TitleText } from "./styles";

interface Option {
  text: string;
  subtext?: string;
}

interface ButtonGroupProps {
  options: Option[];
  defaultValue?: string;
  onOptionSelect: (value: string) => any;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  options,
  defaultValue,
  onOptionSelect,
}) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const renderOption = (option: Option, isFirst?: boolean) => {
    const { text, subtext } = option;
    const selected = selectedValue === text;

    return (
      <Button
        key={text}
        isFirst={isFirst}
        onPress={() => {
          onOptionSelect(text);
          setSelectedValue(text);
        }}
        selected={selected}
      >
        <TitleText selected={selected}>{text}</TitleText>
        {subtext && <ButtonText selected={selected}>{subtext}</ButtonText>}
      </Button>
    );
  };

  const renderOptions = () => {
    return options.map((o, i) => renderOption(o, i === 0));
  };

  return <Container>{renderOptions()}</Container>;
};

export default ButtonGroup;
