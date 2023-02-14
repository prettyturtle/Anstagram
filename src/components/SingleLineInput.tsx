import React, { useState } from "react"
import { StyleProp, TextInput, TextInputProps, View } from "react-native"

export const SingleLineInput: React.FC<{
  value: string
  placeholder?: string
  fontSize?: number
  style?: StyleProp<TextInputProps>
  onSubmitEditing?: () => void
  onChangeText: (text: string) => void
}> = (props) => {
  const [focused, setFocused] = useState<boolean>(false)

  return (
    <View
      style={{
        alignSelf: "stretch",
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: focused ? "black" : "grey",
      }}
    >
      <TextInput
        autoCorrect={false}
        autoCapitalize="none"
        placeholder={props.placeholder ?? ""}
        value={props.value}
        onChangeText={props.onChangeText}
        onSubmitEditing={props.onSubmitEditing}
        onFocus={() => {
          setFocused(true)
        }}
        onBlur={() => {
          setFocused(false)
        }}
        style={[props.style, { fontSize: props.fontSize ?? 20 }]}
      />
    </View>
  )
}
