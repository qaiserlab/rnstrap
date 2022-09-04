import React from "react";
import { Button, View } from "react-native";
import style from "./ButtonStyle";

export default function UiButton(props: any) {
  return (
    <View style={style.container}>
      <Button {...props} />
    </View>
  )
}