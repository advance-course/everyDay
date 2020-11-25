import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function Settings({navigation}) {
  return (
    <View style={st.container}>
      <Text>设置 - 个人信息页</Text>
      <Button title="确定" onPress={() => navigation.navigate('Details')} />
    </View>
  )
}

const st = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
