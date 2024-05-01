import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ShoppingCartIcon = (props) => {
  const { color, borderColor } = props;

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height={24}
      width={24}
      fill="none"
      {...props}
    >
      <Path
        stroke={borderColor || "#9586A8"}
        fill={color || "transparent"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.143 5h17.143L20.57 15.286H6.857L5.143 5ZM8.571 21a1.143 1.143 0 1 0 0-2.286 1.143 1.143 0 0 0 0 2.286ZM18.857 21a1.143 1.143 0 1 0 0-2.286 1.143 1.143 0 0 0 0 2.286ZM5.143 5H1.714"
      />
    </Svg>
  );
};
export default ShoppingCartIcon;
