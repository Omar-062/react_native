import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ChevronLeftIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    width={20}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15 18-6-6 6-6"
    />
  </Svg>
);
export default ChevronLeftIcon;
