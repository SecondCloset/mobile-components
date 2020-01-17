import React, { useState, useEffect } from "react";
import { Container, OptionListAnimateContainer } from "./styles";
import { Animated } from "react-native";
import DropdownButton from "./DropdownButton";
import DropList from "./DropList";

export interface Option {
  key: string;
  name: string;
  value: any;
}

interface DropdownSelectProps {
  options: Option[];
  selectedKey?: string;
  width?: number;
  onSelect: (key: string, value: any) => void;
  placeholder?: string;
  fontSize?: number;
}

const DropdownSelect: React.FC<DropdownSelectProps> = props => {
  const [expanded, setExpanded] = useState(false);
  const [animatedMaxHeight] = useState(new Animated.Value(0));
  const optionHeight = 100;
  const maxHeight = props.options.length * optionHeight;

  const onExpand = () => {
    Animated.timing(animatedMaxHeight, {
      toValue: maxHeight,
      duration: 200,
    }).start();
  };

  const onCollapse = () => {
    Animated.timing(animatedMaxHeight, {
      toValue: 0,
      duration: 100,
    }).start();
  };

  useEffect(() => {
    if (expanded) onExpand();
    else onCollapse();
  }, [expanded]);

  const renderDropdownButton = (): React.ReactElement => {
    const { width = 200, placeholder, selectedKey, options, fontSize } = props;
    const selectedName = options.find(opt => opt.key === selectedKey)?.name;
    return (
      <DropdownButton
        placeholder={placeholder}
        buttonText={selectedName}
        onPress={() => setExpanded(e => !e)}
        fontSize={fontSize}
        width={width}
      />
    );
  };

  const renderOptionList = (): React.ReactElement => {
    const { onSelect, options, fontSize } = props;
    const AnimatedOptionList = Animated.createAnimatedComponent(
      OptionListAnimateContainer
    );

    return (
      <AnimatedOptionList style={{ maxHeight: animatedMaxHeight }}>
        <DropList
          fontSize={fontSize}
          onSelect={(key, value) => {
            onSelect(key, value);
            setExpanded(false);
          }}
          options={options}
        />
      </AnimatedOptionList>
    );
  };

  return (
    <Container>
      {renderDropdownButton()}
      {renderOptionList()}
    </Container>
  );
};

export default DropdownSelect;
