import React from "react"
import { Text, View, Pressable } from "react-native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { useNavigation } from "@react-navigation/native"

export default function SettingsView() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>()

  return (
    <React.Fragment>
      <View>
        <Pressable 
          style={{ marginTop: 32, padding: 16, backgroundColor: 'gold' }}
          onPress={() => navigation.navigate('FingerID')}
        >
          <Text>Finger ID</Text>
        </Pressable>
        <Pressable 
          style={{ marginTop: 8, padding: 16, backgroundColor: 'gold' }}
          onPress={() => navigation.navigate('FaceID')}
        >
          <Text>Face ID</Text>
        </Pressable>
      </View>
    </React.Fragment>
  )
}