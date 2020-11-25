import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Details from 'pages/Profile/components/Details'
import Expore from 'pages/Explore'

const Drawer = createDrawerNavigator()

export default function Home() {
  return (
    <Drawer.Navigator initialRouteName="Details">
      <Drawer.Screen name="Details" component={Details} />
      <Drawer.Screen name="Expore" component={Expore} />
    </Drawer.Navigator>
  )
}
