import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from "react-native";


//Import Screens
import ProfileScreen from "./screens/ProfileScreen";
import CreateScreen from "./screens/CreateScreen";
import ClosetScreen from "./screens/ClosetScreen";
import NewCatergoryScreen from './screens/NewCatergoryScreen';

//Import Materials for the Bottom Tab
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Import Icons for the NavBar

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return(
            <Tab.Navigator 
        labeled = {false}
        barStyle ={{ backgroundColor: '#454545'}}
        activeColor = "white"
         >
          <Tab.Screen 
            name = "Closet"  
            component={ClosetScreen}
            options = {{tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name = "hanger" color={color} size = {35} style = {styles.icon}/>
            ),}}/>
         
          
          <Tab.Screen 
            name = "Create"  
            component={CreateScreen}
            options = {{tabBarIcon: ({color,size}) => (
              <MaterialCommunityIcons name = "bookmark-plus-outline" color={color} size = {35} style = {styles.icon}/>
            ),}}/>
         
          <Tab.Screen
            name = "Profile"  
            component = {ProfileScreen}
            options = {{tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name = "account-circle" color={color} size ={35} style = {styles.icon}/>
            ),
            }}/>

        </Tab.Navigator>
  );
}

export default function App(){
  return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = "TabNavigator" component={TabNavigator} options ={{headerShown: false}}/>
          <Stack.Screen name = "NewCatergory" component={NewCatergoryScreen} options ={{headerShown: false}}/>
        </Stack.Navigator>

      </NavigationContainer>
  );
}


const styles = StyleSheet.create({
    icon:{
      height: 40,
      width: 40,
    },
});