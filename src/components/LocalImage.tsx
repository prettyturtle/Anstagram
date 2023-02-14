import React from "react"
import { Image, StyleProp, ImageProps, ImageSourcePropType } from "react-native"

export const LocalImage: React.FC<{
  localAsset: ImageSourcePropType
  width: number
  height: number
  style?: StyleProp<ImageProps>
}> = (props) => {
  return (
    <Image
      source={props.localAsset}
      style={[
        props.style,
        {
          width: props.width,
          height: props.height,
        },
      ]}
    />
  )
}
