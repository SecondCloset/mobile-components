import React from "react";
import { Container, Button, ButtonText, TitleText } from "./styles";

interface Option {
  text: string;
  subtext?: string;
  disabled?: boolean;
}

interface ButtonGroupProps {
  options: Option[];
  selectedOptionText?: Option["text"];
  onOptionSelect: (optionText: Option["text"]) => any;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  options,
  selectedOptionText,
  onOptionSelect,
}) => {
  const renderOption = (
    option: Option,
    isFirst: boolean = false,
    isLast: boolean = false
  ) => {
    const { text, subtext, disabled = false } = option;
    const selected = selectedOptionText === text;

    return (
      <Button
        key={text}
        isFirst={isFirst}
        isLast={isLast}
        onPress={() => onOptionSelect(text)}
        selected={selected}
        disabled={disabled}
        isTwoButtons={options.length === 2}
      >
        <TitleText selected={selected} disabled={disabled}>
          {text}
        </TitleText>
        {subtext && (
          <ButtonText selected={selected} disabled={disabled}>
            {subtext}
          </ButtonText>
        )}
      </Button>
    );
  };

  const renderOptions = () => {
    return options.map((o, i) => {
      const isFirst = i === 0;
      const isLast = i === options.length - 1;
      return renderOption(o, isFirst, isLast);
    });
  };

  return <Container>{renderOptions()}</Container>;
};

export default ButtonGroup;
