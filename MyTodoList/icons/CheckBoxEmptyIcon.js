import React from 'react';
import { Svg, Rect } from 'react-native-svg';

const CheckBoxEmptyIcon = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Rect x="0.5" y="0.5" width="23" height="23" rx="2.5" fill="white" />
      <Rect x="0.5" y="0.5" width="23" height="23" rx="2.5" stroke="#4A3780" />
    </Svg>
  );
};

export default CheckBoxEmptyIcon;