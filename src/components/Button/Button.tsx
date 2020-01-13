import * as React from 'react';
import { TouchableHighlight } from 'react-native';

interface ButtonProps {
  onPress: () => void;
}

const Button: React.SFC<ButtonProps> = ({ onPress, children }) => {
  return <TouchableHighlight onPress={onPress}>{children}</TouchableHighlight>;
};

export default Button;
