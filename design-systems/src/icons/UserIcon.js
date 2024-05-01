import * as React from "react";
import Svg, { Path } from "react-native-svg";
const UserIcon = (props) => {
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
        d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      />
    </Svg>
  );
};
export default UserIcon;
