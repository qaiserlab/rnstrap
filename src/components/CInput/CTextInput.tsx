import React from "react";
import { TextInput, View } from "react-native";
import CTextInputStyle from "./CTextInputStyle";

export default function LoginView(props: any) {
  return (
    <View style={CTextInputStyle.container}>
      <TextInput {...props} />
    </View>
  )
}