import React from "react";
import { StyleSheet,Text,SafeAreaView } from "react-native";
export default function Icon(){
  return (
    <SafeAreaView style={st.container}>
      <Text>123</Text>
    </SafeAreaView>
  )
}

const st = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingBottom:20,
    paddingLeft:14,
    paddingRight:14,
    marginVertical: 8,
    marginHorizontal: 20,
    borderRadius:8
  },
})