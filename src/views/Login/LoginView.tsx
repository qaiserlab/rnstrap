import React from "react"
import { View } from "react-native"
import CTextInput from "../../components/CInput/CTextInput"
import CButton from "../../components/CButton/CButton"
import LoginStyle from "./LoginStyle"
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
        <CTextInput placeholder="Username" />
        <CTextInput placeholder="Password" />
        
        <CButton onPress={handleLogin} title="Login" />
      </View>
    </React.Fragment>
  )
}