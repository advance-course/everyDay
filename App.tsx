import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import Home from 'pages/Home'
import Explore from 'pages/Explore'
import Profile from 'pages/Profile'
import Icon from "components/element/Icon"
import { proview } from "./src/routers"
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const App = () => {
  const Tabs = () =>(
    <Tab.Navigator screenOptions={(route)=>({
      tabBarIcon:() => {
        console.log(route)
        return <Icon type={'xin'} fontSize={26} color={"#8ab4f8"} />;
      }
    })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator> 
  )
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs">
        <Stack.Screen name="Tabs" component={Tabs} />
        {
          proview.map(item => <Stack.Screen name={item.path} component={item.component} key={item.name} />)
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App
