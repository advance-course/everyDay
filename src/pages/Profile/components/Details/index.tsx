import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from "element/Icon"
export default function Details() {
  return (
    <View style={st.container}>
      <Text>详情页</Text>
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
