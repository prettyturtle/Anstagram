import React from "react"
import { Image, ImageProps, StyleProp } from "react-native"

export const RemoteImage: React.FC<{
  uri: string
  width: number
  height: number
  style?: StyleProp<ImageProps>
}> = ({ uri, width, height, style }) => {
  return (
    <Image
      source={{ uri: uri }}
      style={[style, { width, height }]}
    />
  )
}
