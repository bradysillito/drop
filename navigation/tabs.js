import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs' 

// import the needed screens for the Nav Bar 
import ProfileScreen from '../screens/ProfileScreen';
import CreateScreen from '../screens/CreateScreen';
import ClosetScreen from '../screens/ClosetScreen';

const Tab = createBottomTabNavigator();

const Tabs= () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name = "Profile" component= { ProfileScreen } />
            <Tab.Screen name = "Create" component= { CreateScreen } />
            <Tab.Screen name = "Closet" component= { ClosetScreen } />
        </Tab.Navigator>
    )
}

export default Tabs;

