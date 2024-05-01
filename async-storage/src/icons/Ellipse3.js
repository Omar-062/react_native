import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      fill="#7E19FF"
      fillOpacity={0.6}
      d="M17.89 662.456c-90.206-51.549 190.924-219.814 173.798-330.164-16.394-105.64-146.737-174.042-81.157-277.83 101.873-161.227 511.093 72.215 562.118 224.661 57.307 171.21-504.098 469.427-654.758 383.333Z"
    />
  </Svg>
);
export default SvgComponent;
