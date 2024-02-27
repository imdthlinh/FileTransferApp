import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/Home';



const HomeNavigator = () => {
    const HomeStack = createNativeStackNavigator();
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name = "Share" component={Home}/>
      </HomeStack.Navigator>
    )
}

export default HomeNavigator
