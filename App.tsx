import React from 'react'
import { Text, View } from 'react-native'
import TabNavigator from './components/TabNavigator'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigator from './components/navigators/HomeNavigator'

const App = () => {
  const Tabs = createBottomTabNavigator();
    return (
      <TabNavigator/>
    )
  }

export default App
