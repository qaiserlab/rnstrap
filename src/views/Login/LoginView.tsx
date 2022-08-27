import React from "react"
import { Text, View } from "react-native"
import CTextInput from "../../components/CInput/CTextInput"
import CButton from "../../components/CButton/CButton"
import LoginStyle from "./LoginStyle"

export default function LoginView() {
  return (
    <React.Fragment>
      <View style={LoginStyle.container}>
        <CTextInput placeholder="Username" />
        <CTextInput placeholder="Password" />
        
        <CButton title="Login" />
      </View>
    </React.Fragment>
  )
}