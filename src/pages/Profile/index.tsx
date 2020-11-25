import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import Settings from './components/Settings'
import Details from './components/Details'

const ProfileStack = createStackNavigator()

export default function Profile() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Settings" component={Settings} />
      <ProfileStack.Screen name="Details" component={Details} />
    </ProfileStack.Navigator>
  )
}

