import * as React from "react";
import Svg, { Defs, ClipPath, Path, Rect, G } from "react-native-svg";

const BackArrowIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Defs>
      <ClipPath id="b">
        <Path fill="#fff" fillOpacity={0} d="M11 11h24v24H11z" />
      </ClipPath>
      <ClipPath id="a">
        <Rect width={48} height={48} fill="#fff" fillOpacity={0} rx={24} />
      </ClipPath>
    </Defs>
    <Rect width={48} height={48} fill="#FFF" rx={24} />
    <G clipPath="url(#a)">
      <Path fill="none" d="M11 11h24v24H11z" />
      <G clipPath="url(#b)">
        <Path
          fill="#4A3780"
          d="m21.828 23 4.95 4.95-1.414 1.414L19 23l6.364-6.364 1.414 1.414-4.95 4.95Z"
        />
      </G>
    </G>
  </Svg>
);
export default BackArrowIcon;
