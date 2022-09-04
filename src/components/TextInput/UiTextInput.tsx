import React from "react";
import { TextInput, View } from "react-native";
import style from "./TextInputStyle";

export default function UiTextInput(props: any) {
  return (
    <View style={style.container}>
      <TextInput {...props} />
    </View>
  )
}