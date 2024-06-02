// UIPaddingBlock
import React from 'react';
import { View } from 'react-native';

interface PaddingBlockProps {
  pad: number
}

const PaddingBlock: React.FC<PaddingBlockProps> = ({ pad }) => {
  return (
    <View style={{ marginVertical: pad }}></View>
  );
};

export default PaddingBlock;