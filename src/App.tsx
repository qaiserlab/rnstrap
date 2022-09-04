// In App.js in a new project

import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeView from './views/Home/HomeView'
import LoginView from './views/Login/LoginView'
import { View } from 'react-native'

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
      </Stack.Navigator>
    </NavigationContainer>
  )
}