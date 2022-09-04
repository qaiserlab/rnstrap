import React from "react"
import { View } from "react-native"
import LoginStyle from "./LoginStyle"
import UiTextInput from "../../components/TextInput/UiTextInput"
import UiButton from "../../components/Button/UiButton"
import apiV1 from "../../helpers/apiV1"

export default function LoginView() {
  
  const handleLogin = () => {
    apiV1.post('/login', {
      username: 'qaiserlab',
      password: 'm30ng',
    })
  }

  return (
    <React.Fragment>
      <View style={LoginStyle.container}>
        <UiTextInput placeholder="Username" />
        <UiTextInput placeholder="Password" />
        
        <UiButton onPress={handleLogin} title="Login" />
      </View>
    </React.Fragment>
  )
}