import React from 'react'
import { Text, View } from 'react-native'

function nameDecorator(target: any, key: any, descriptor: any) {
  descriptor.value = () => {
    return 'jake';
  }
  return descriptor;
}

export default class Icon extends React.Component {
  @nameDecorator
  getName() {
    console.log('hello')
  }
  render() {
    return (
      <View><Text>Icon 组件</Text></View>
    )
  }
}

