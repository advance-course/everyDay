import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Explore() {
  return (
    <View style={st.container}>
      <Text>发现</Text>
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
