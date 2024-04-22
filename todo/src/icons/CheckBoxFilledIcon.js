import * as React from "react";
import Svg, { Defs, ClipPath, Path, Rect, G } from "react-native-svg";

const CheckBoxFilledIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Defs>
      <ClipPath id="b">
        <Path fill="#fff" fillOpacity={0} d="M0 0h24v24H0z" />
      </ClipPath>
      <ClipPath id="a">
        <Rect
          width={23}
          height={23}
          fill="#fff"
          fillOpacity={0}
          rx={1.5}
          transform="translate(.5 .5)"
        />
      </ClipPath>
    </Defs>
    <Rect
      width={23}
      height={23}
      fill="#4A3780"
      rx={1.5}
      transform="translate(.5 .5)"
    />
    <G clipPath="url(#a)">
      <Path fill="none" d="M0 0h24v24H0z" />
      <G clipPath="url(#b)">
        <Path
          fill="#FFF"
          d="m10 15.172 9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414 4.95 4.95Z"
        />
      </G>
    </G>
    <Rect
      width={23}
      height={23}
      stroke="#4A3780"
      rx={1.5}
      transform="translate(.5 .5)"
    />
  </Svg>
);
export default CheckBoxFilledIcon;
