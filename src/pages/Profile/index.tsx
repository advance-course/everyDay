import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function Profile({navigation}:any) {
  return (
    <View style={st.container}>
      <Text>UI预览页</Text>
      <Button title="确定" onPress={() => navigation.navigate('Proview')} />
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


