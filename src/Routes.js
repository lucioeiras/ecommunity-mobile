import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from './pages/Login'
import Home from './pages/Home'
import Search from './pages/Search'
import Read from './pages/Read'
import Profile from './pages/Profile'

const { Navigator, Screen } = createStackNavigator()

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Login" component={Login} />
        <Screen name="Home" component={Home} />
        <Screen name="Search" component={Search} />
        <Screen name="Read" component={Read} />
        <Screen name="Profile" component={Profile} />
      </Navigator>
    </NavigationContainer>
  )
}
