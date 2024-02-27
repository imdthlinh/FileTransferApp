import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { Text, View } from 'react-native'
import HomeNavigator from './navigators/HomeNavigator';
import { Home, Setting2, Setting3 } from 'iconsax-react-native';
import SettingNavigator from './navigators/SettingNavigator';
import RowComponent from './RowComponent';
import { styles } from '../styles/global';

const TabNavigator = () => {
    const Tabs = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tabs.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingVertical: 12,
                        height: 60
                    },
                    tabBarIcon: ({ focused, color, size }) => {
                        size = 30;
                        if (route.name === 'HomeStack') {
                            return <RowComponent localStyles={{
                                backgroundColor: focused ? '#e0e0e0' : '#fff'
                            }}>
                                <Home size={size} color={focused ? 'coral' : '#2ccce4'} />
                                {focused && <Text style={[styles.tabLabel1]}>Home</Text>}
                            </RowComponent>
                        } else (route.name === 'SettingStack')
                        return (
                            <RowComponent localStyles={{
                                backgroundColor: focused ? '#e0e0e0' : '#fff'
                            }}>
                                <Setting2 size={size} color={focused ? 'coral' : '#2ccce4'} />
                                {focused && <Text style={[styles.tabLabel1]}>Setting</Text>}
                            </RowComponent>
                        )
                    }
                })}>
                <Tabs.Screen
                    name='HomeStack'
                    component={HomeNavigator}
                    options={{ headerTitle: 'Home' }} />
                <Tabs.Screen
                    name='Setting'
                    component={SettingNavigator}
                    options={{ headerTitle: 'Setting' }} />
            </Tabs.Navigator>
        </NavigationContainer>
    )
}

export default TabNavigator
