import React from "react"
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics'
import { Text, View, Pressable } from "react-native"

export default function FingerIDView() {

  const rnBiometrics = new ReactNativeBiometrics()
  
  rnBiometrics.isSensorAvailable()
  .then((resultObject) => {
    const { available, biometryType } = resultObject

    if (available && biometryType === BiometryTypes.TouchID) {
      console.log('TouchID is supported')
    } else if (available && biometryType === BiometryTypes.FaceID) {
      console.log('FaceID is supported')
    } else if (available && biometryType === BiometryTypes.Biometrics) {
      console.log('Biometrics is supported')
    } else {
      console.log('Biometrics not supported')
    }
  })

  return (
    <React.Fragment>
      <View>
        <Text>Finger ID Settings</Text>
      </View>
    </React.Fragment>
  )
}