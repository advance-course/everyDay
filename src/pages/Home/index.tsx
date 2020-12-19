import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Reactotron from 'reactotron-react-native';

export default function Home() {
  return (
    <View style={st.container}>
      <Text>首页</Text>
    </View>
  );
}

const st = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});