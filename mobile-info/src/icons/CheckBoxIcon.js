import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";

const CheckBoxIcon = () => (
  <Svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      fill="#F6F6F6"
      stroke="#E8E8E8"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2 2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"
      rx={4}
    />
  </Svg>
);
export default CheckBoxIcon;
