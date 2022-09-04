import React from "react"
import { Text, View, Pressable } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { APP_NAME } from "@env"
import style from "./HomeStyle"

export default function HomeView() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>()
  
  return (
    <React.Fragment>
      <View style={style.container}>
        <Text style={style.title}>Welcome to {APP_NAME}</Text>
        <Pressable 
          style={{ marginTop: 32, padding: 16, backgroundColor: 'gold' }}
          onPress={() => navigation.navigate('Settings')}
        >
          <Text>Go to Settings</Text>
        </Pressable>
      </View>
    </React.Fragment>
  )
}