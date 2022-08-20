import React from "react";
import { Text, View } from "react-native";
import HomeStyle from "./HomeStyle";

export default function HomeView() {
  return (
    <React.Fragment>
      <View style={HomeStyle.container}>
        <Text>HOME SCREEN</Text>
      </View>
    </React.Fragment>
  )
}