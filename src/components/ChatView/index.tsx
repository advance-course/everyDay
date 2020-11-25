import React from 'react'
import { Button, Text, View } from 'react-native'
import {RooteStackParamList} from 'App'
import { StackNavigationProp } from '@react-navigation/stack'

type Props = {
  navigation: StackNavigationProp<RooteStackParamList>
}

export default function ChatView({navigation}: Props) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate('Details', {itemId: 86, otherParam: 'anything you want here'})} />
      <Button title="set Title" onPress={() => navigation.setOptions({title: '新的标题'})} />
    </View>
  )
}
