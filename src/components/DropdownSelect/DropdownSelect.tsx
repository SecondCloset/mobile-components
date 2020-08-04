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

export interface DropdownSelectProps {
  options: Option[];
  selectedKey?: Option["key"];
  width?: number | string;
  onSelect: (key: Option["key"], value: Option["value"]) => void;
  placeholder?: string;
  fontSize?: number;
}

const DropdownSelect: React.FC<DropdownSelectProps> = (props) => {
  const [expanded, setExpanded] = useState(false);
  const [animatedMaxHeight] = useState(new Animated.Value(0));
  const optionHeight = 100;
  const maxHeight = props.options.length * optionHeight;

  const onExpand = () => {
    Animated.timing(animatedMaxHeight, {
      toValue: maxHeight,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const onCollapse = () => {
    Animated.timing(animatedMaxHeight, {
      toValue: 0,
      duration: 100,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    if (expanded) onExpand();
    else onCollapse();
  }, [expanded]);

  const renderDropdownButton = (): React.ReactElement => {
    const { placeholder, selectedKey, options, fontSize } = props;
    const selectedName = options.find((opt) => opt.key === selectedKey)?.name;
    return (
      <DropdownButton
        placeholder={placeholder}
        buttonText={selectedName}
        onPress={() => setExpanded((e) => !e)}
        fontSize={fontSize}
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
    <Container width={props.width}>
      {renderDropdownButton()}
      {renderOptionList()}
    </Container>
  );
};

export default DropdownSelect;
