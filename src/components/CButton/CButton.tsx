import React from "react";
import { Button, View } from "react-native";
import CButtonStyle from "./CButtonStyle";

export default function LoginView(props: any) {
  return (
    <View style={CButtonStyle.container}>
      <Button {...props} />
    </View>
  )
}