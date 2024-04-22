import * as React from "react"
import Svg, { Defs, ClipPath, Rect } from "react-native-svg"

const CheckBoxEmptyIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Defs>
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
      fill="#FFF"
      rx={1.5}
      transform="translate(.5 .5)"
    />
    <Rect
      width={23}
      height={23}
      stroke="#4A3780"
      rx={1.5}
      transform="translate(.5 .5)"
    />
  </Svg>
)
export default CheckBoxEmptyIcon
