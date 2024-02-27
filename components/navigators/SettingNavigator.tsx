import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Text, View } from 'react-native'
import Setting from '../../screens/Setting';

const SettingNavigator = () => {
  const SettingStack = createNativeStackNavigator();
    return (
      <SettingStack.Navigator>
        <SettingStack.Screen name = "Setting" component={Setting}/>
      </SettingStack.Navigator>
    )
  }

export default SettingNavigator
