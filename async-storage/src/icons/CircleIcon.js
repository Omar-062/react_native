import * as React from "react";
import Svg, { Rect } from "react-native-svg";
import { Colors } from "../components/unknown/Colors";

const CircleIcon = (props) => {
  const { color, borderColor } = props;

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      fill="none"
      {...props}
    >
      <Rect width={32} height={32} fill={color || Colors.grey} rx={16} />
    </Svg>
  );
};
export default CircleIcon;
