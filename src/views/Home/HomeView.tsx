import React from "react"
import { Text, View } from "react-native"
import { APP_NAME } from "@env"
import HomeStyle from "./HomeStyle"

export default function HomeView() {
  return (
    <React.Fragment>
      <View style={HomeStyle.container}>
        <Text style={HomeStyle.title}>Welcome to {APP_NAME}</Text>
      </View>
    </React.Fragment>
  )
}