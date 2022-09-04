// In App.js in a new project

import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginView from './views/Login/LoginView'
import HomeView from './views/Home/HomeView'
import SettingsView from './views/Settings/SettingsView'
import FingerIDView from './views/Settings/FingerIDView'
import FaceIDView from './views/Settings/FaceIDView'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginView} />
        <Stack.Screen 
          name="Home" 
          component={HomeView} 
          options={{ 
            headerBackVisible:false, 
            headerShown: false
          }} 
        />      
        <Stack.Screen name="Settings" component={SettingsView} />
        <Stack.Screen name="FingerID" component={FingerIDView} />
        <Stack.Screen name="FaceID" component={FaceIDView} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}