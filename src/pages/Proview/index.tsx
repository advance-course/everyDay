import React from "react";
import { StyleSheet,Text, View,SafeAreaView ,FlatList,ListRenderItem,TouchableHighlight} from "react-native";
import Icon from "element/Icon"
import { Iproview } from "./proview"
const data:Iproview[] = [
 {
   iconName:'tongzhi',
   title:'基础',
   description:'包含颜色,文本,图标等',
   to:'Icon'
 },
 {
   iconName:'feather-blur-light',
   title:'基础',
   description:'包含颜色,文本,图标等',
   to:'Button'
 },
 {
   iconName:'jiazai',
   title:'基础',
   description:'包含颜色,文本,图标等',
   to:'/icon'
 },
 {
   iconName:'xin',
   title:'基础',
   description:'包含颜色,文本,图标等',
   to:'/icon'
 },
 {
   iconName:'liaotian-kuang',
   title:'基础',
   description:'包含颜色,文本,图标等',
   to:'/icon'
 },
 {
   iconName:'zuoyoujiantou',
   title:'基础',
   description:'包含颜色,文本,图标等',
   to:'/icon'
 },
 {
   iconName:'aA',
   title:'基础',
   description:'包含颜色,文本,图标等',
   to:'/icon'
 },
 {
   iconName:'left',
   title:'基础',
   description:'包含颜色,文本,图标等',
   to:'/icon'
 },
];

export default function Proview({navigation}:any){
  const renderItem:ListRenderItem<Iproview> = (item) => (
    <TouchableHighlight onPress={() => navigation.navigate(item.item.to)} underlayColor={'none'}>
      <View style={st.item} >
        <View style={st.leftWrap}>
          <View style={st.leftIcon}>
            <Icon type={item.item.iconName} color={"#a4b9df"} fontSize={20}></Icon>
          </View>
          <View style={st.leftContent}>
          <Text style={st.contentTitle}>{item.item.title}</Text>
          <Text style={st.contentDescription}>{item.item.description}</Text>
          </View>
        </View>
        <View style={st.rightWrap}>
          <Icon type={"zuoyoujiantou"} fontSize={16} color={"#fff"} />
        </View>
      </View>
    </TouchableHighlight>
 );
  return (
    <SafeAreaView style={st.container}>
    <FlatList 
      data={data} 
      renderItem={renderItem}
      keyExtractor={item => item.iconName}>
    </FlatList>
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
  leftWrap: {
    display:'flex',
    flexDirection:'row',
    alignItems:'center'
  },
  leftIcon: {
    height:38,
    width:38,
    borderRadius:50,
    borderWidth:3,
    borderColor:'#ecf1fb',
    justifyContent:'center',
    alignItems:"center"
  },
  leftContent: {
    marginLeft:12
  },
  contentTitle: {
    fontSize: 16,
    fontWeight:"500",
    color:'#333'
  },
  contentDescription: {
    paddingTop:4,
    fontSize:12,
    color:'#a6a6b0',
  },
  rightWrap: {
    height:30,
    width:30,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:50,
    backgroundColor:"#77a6fa"
  },
})
