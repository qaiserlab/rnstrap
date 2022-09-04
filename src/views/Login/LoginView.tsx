import React from "react"
import { View } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import LoginStyle from "./LoginStyle"
import UiTextInput from "../../components/TextInput/UiTextInput"
import UiButton from "../../components/Button/UiButton"
import apiV1 from "../../helpers/apiV1"

export default function LoginView() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>()
  
  const handleLogin = () => {
    apiV1.post('/login', {
      username: 'qaiserlab',
      password: 'm30ng',
    })
    
    navigation.navigate('Home')
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
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