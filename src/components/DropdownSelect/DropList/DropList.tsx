import React from "react";
import { OptionListContainer, OptionButton, OptionButtonText } from "./styles";
import { Option } from "../DropdownSelect";

interface DropListProps {
  fontSize?: number;
  onSelect: (key: string, value: string) => void;
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
            onPress={() => {
              onSelect(key, value);
            }}
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
