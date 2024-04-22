import * as React from "react";
import Svg, { Defs, ClipPath, Rect, G, Path } from "react-native-svg";

const CloseIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Defs>
      <ClipPath id="a">
        <Rect width={48} height={48} fill="#fff" fillOpacity={0} rx={24} />
      </ClipPath>
    </Defs>
    <Rect width={48} height={48} fill="#FFF" rx={24} />
    <G clipPath="url(#a)">
      <Path fill="none" d="M12 12h24v24H12z" />
      <Path
        stroke="#14142B"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m18 18 12.774 12.774m-12.774 0L30.774 18"
      />
    </G>
  </Svg>
);
export default CloseIcon;
