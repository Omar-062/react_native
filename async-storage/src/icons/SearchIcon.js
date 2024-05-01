import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SearchIcon = (props) => {
  const { color } = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height={24}
      width={24}
      fill="none"
      {...props}
    >
      <Path
        stroke={color || "#9586A8"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.35-4.35"
      />
    </Svg>
  );
};
export default SearchIcon;
