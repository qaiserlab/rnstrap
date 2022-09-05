import React from "react"
import { Text, View, Pressable, Alert } from "react-native"
import ReactNativeBiometrics from 'react-native-biometrics'
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { useNavigation } from "@react-navigation/native"

export default function SettingsView() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>()

  const handleBiometricID = () => {
    const rnBiometrics = new ReactNativeBiometrics()

    rnBiometrics.simplePrompt({promptMessage: 'Confirm Biometric ID'}).then((result) => {
      const { success } = result

      if (success) {
        console.log('successful biometrics provided')
      } else {
        console.log('user cancelled biometric prompt')
      }
      
    })
    .catch(() => {
      Alert.alert('Please setup your Finger/Face ID on your ponsel settings')
    })
  }

  return (
    <React.Fragment>
      <View>
        <Pressable 
          style={{ marginTop: 32, padding: 16, backgroundColor: 'gold' }}
          onPress={handleBiometricID}
        >
          <Text>Biometric ID</Text>
        </Pressable>
        {/* <Pressable 
          style={{ marginTop: 8, padding: 16, backgroundColor: 'gold' }}
          onPress={() => navigation.navigate('FaceID')}
        >
          <Text>Face ID</Text>
        </Pressable> */}
      </View>
    </React.Fragment>
  )
}