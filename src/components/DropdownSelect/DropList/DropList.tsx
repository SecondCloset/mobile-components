import React from "react";
import { OptionListContainer, OptionButton, OptionButtonText } from "./styles";
import { Option, DropdownSelectProps } from "../DropdownSelect";

interface DropListProps {
  fontSize?: number;
  onSelect: DropdownSelectProps["onSelect"];
  options: Option[];
}

const DropList: React.FC<DropListProps> = props => {
  const { onSelect, options, fontSize } = props;
  return (
    <OptionListContainer>
      {options.map((option, index) => {
        const { key, name, value } = option;
        const isLast = index === options.length - 1;
        return (
          <OptionButton
            onPress={() => onSelect(key, value)}
            isLast={isLast}
            key={key}
            activeOpacity={1}
          >
            <OptionButtonText fontSize={fontSize}>{name}</OptionButtonText>
          </OptionButton>
        );
      })}
    </OptionListContainer>
  );
};

export default DropList;
