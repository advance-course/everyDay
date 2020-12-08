import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from "element/Icon"
export default function Details() {
  return (
    <View style={st.container}>
      <Text>详情页</Text>
        <Icon type={'tongzhi'} fontSize={50} color={'#333'} style={{margin:10}}></Icon>
        <Icon type={'feather-blur-light'} ></Icon>
        <Icon type={'jiazai'}  spin={true} color={'#333'}></Icon> 
        <Icon type={'xin'}></Icon>
        <Icon type={'liaotian-kuang'} ></Icon>
        <Icon type={'zuoyoujiantou'}></Icon>
        <Icon type={'aA'}></Icon>
        <Icon type={'left'}></Icon>
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
