import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from 'pages/Home'
import Explore from 'pages/Explore'
import Profile from 'pages/Profile'
declare const global: {HermesInternal: null | {}};

export type RooteStackParamList = {
  Home: {a?: number, b?: string},
  Details: {itemId: number, otherParam: string}
}

// const Stack = createStackNavigator<RooteStackParamList>()

const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{tabBarBadge: 5}} />
        <Tab.Screen name="Explore" component={Explore} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App
