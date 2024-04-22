import * as React from "react"
import Svg, { Defs, ClipPath, Path, Rect, G } from "react-native-svg"

const CategoryTaskIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Defs>
      <ClipPath id="b">
        <Path fill="#fff" fillOpacity={0} d="M12 12h24v24H12z" />
      </ClipPath>
      <ClipPath id="a">
        <Rect width={48} height={48} fill="#fff" fillOpacity={0} rx={24} />
      </ClipPath>
    </Defs>
    <Rect width={48} height={48} fill="#DBECF6" rx={24} />
    <G clipPath="url(#a)">
      <Path fill="none" d="M12 12h24v24H12z" />
      <G clipPath="url(#b)">
        <Path
          fill="#194A66"
          d="M32 34H16a1 1 0 0 1-1-1V15a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1Zm-1-2V16H17v16h14ZM20 19h8v2h-8v-2Zm0 4h8v2h-8v-2Zm0 4h8v2h-8v-2Z"
        />
      </G>
    </G>
  </Svg>
)
export default CategoryTaskIcon
