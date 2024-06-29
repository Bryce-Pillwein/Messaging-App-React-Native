// UIText
import React from 'react';
import { Text, StyleSheet, StyleProp, TextStyle } from 'react-native';

interface UITextProps {
  onPress?: () => void;
  children?: any;
  style?: StyleProp<TextStyle>;
}

const Txt: React.FC<UITextProps> = ({ children, style, onPress, ...props }) => {
  return (
    <Text {...props} style={[ss.text, style]} onPress={onPress}>
      {children}
    </Text>
  );
};

const ss = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Inter',
  },
});

export default Txt;

