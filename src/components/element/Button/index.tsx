import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import {Button, Text, View} from 'react-native'
import {RooteStackParamList} from 'App'
import { RouteProp } from '@react-navigation/core'

type Props = {
  navigation: StackNavigationProp<RooteStackParamList>,
  route: RouteProp<RooteStackParamList, 'Details'>
}

export default function Details({navigation, route}: Props) {
  console.log(route)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home', {})} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  )
}
