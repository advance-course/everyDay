import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import Home from 'pages/Home'
import Explore from 'pages/Explore'
import Profile from 'pages/Profile'
import Proview from "pages/Proview"
import Icon from "pages/Proview/compoents/Icon"
import Button from "pages/Proview/compoents/Button"
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const App = () => {
  const Tabs = () =>(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{tabBarBadge: 5}} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator> 
  )
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs">
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Proview" component={Proview}/>
        <Stack.Screen name="Icon" component={Icon} />
        <Stack.Screen name="Button" component={Button} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App
