import * as React from "react"
import Svg, { Defs, ClipPath, Path, Rect, G } from "react-native-svg"

const CategoryGoalIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Defs>
      <ClipPath id="b">
        <Path fill="#fff" fillOpacity={0} d="M12 12h24v24H12z" />
      </ClipPath>
      <ClipPath id="a">
        <Rect width={48} height={48} fill="#fff" fillOpacity={0} rx={24} />
      </ClipPath>
    </Defs>
    <Rect width={48} height={48} fill="#FEF5D3" rx={24} />
    <G clipPath="url(#a)">
      <Path fill="none" d="M12 12h24v24H12z" />
      <G clipPath="url(#b)">
        <Path
          fill="#403100"
          d="M25 28.938V31h5v2H18v-2h5v-2.062A8 8 0 0 1 16 21v-6h16v6a8 8 0 0 1-7 7.938ZM18 17v4a6 6 0 1 0 12 0v-4H18Zm-5 0h2v4h-2v-4Zm20 0h2v4h-2v-4Z"
        />
      </G>
    </G>
  </Svg>
)
export default CategoryGoalIcon
