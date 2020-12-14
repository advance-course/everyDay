import React,{useState,useEffect} from "react"
import {View,Animated, Easing,StyleSheet} from "react-native"
import map from 'element/Icon/map';
import {IIcon} from "./Icon"

const Icon : React.FC<IIcon> = ({type, fontSize = 30, color, style, spin, ...props}) => {

  let [rotateValue]  = useState(new Animated.Value(0));
  useEffect(()=>{
    if(!spin) return;
    rotateValue.setValue(0);
    spinLoop();
  },[])

  const spinLoop = ()=>{
    Animated.loop(
      Animated.timing(
        rotateValue,
        {
         toValue:360, 
         duration: 1200,
         easing: Easing.linear,
         useNativeDriver:true
        }
      ),
        {iterations: -1}
    ).start();
  }
  
  return (
    <View  style={[styles.container,{width:fontSize,height:fontSize},style]}>
      <Animated.Text 
        {...props} 
        style={[
          {fontFamily: 'iconfont' },
          {fontSize},
          {color},
          {transform:
            [
             {'rotate': rotateValue.interpolate({inputRange: [0, 360],outputRange: ['0deg', '360deg']})}
            ]}]}>
        {map[type]}
      </Animated.Text>
    </View>
  )
}

export const styles = StyleSheet.create({
  container:{
    width:30,
    height:30,
    position:'relative',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
})

export default Icon;