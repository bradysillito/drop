import React from "react";
import { Button, View, StyleSheet,Text, Line } from 'react-native'
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

//Import The individual closet components
import ClosetComponent from "../components/ClosetComponent";

//Import Icons and Fonts 
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import {useFonts} from 'expo-font';

const ClosetScreen = ({navigation}) => {
     return(
        <View style = {styles.container}>
            <ScrollView>
                {/* Header */}
                <SafeAreaView >
                    <View style = {styles.menuWrapper}>
                        <View style = {styles.titleWrapper}>
                            <Text style = {styles.title}> Your </Text>
                            <Text style = {styles.title}> Closet </Text>
                        </View>
                        <TouchableOpacity 
                            style = {styles.newIcon}
                            onPress={()=> navigation.navigate("NewCatergory")}>
                            <MaterialCommunityIcons 
                                name = "shape-rectangle-plus" color = {'white'} size = {40} />
                        </TouchableOpacity>
                        {/*<Line/>*/}
                    </View>
                </SafeAreaView>
                
                <View style = {styles.componentsContainer}>
                    <ClosetComponent text = 'Jackets'/>
                    <ClosetComponent text = 'Pants'/>
                    <ClosetComponent text = 'Hats'/>
                </View>
                

            </ScrollView>
        </View>
    );
}

export default ClosetScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1E1E'
    },
    componentsContainer:{
        flex: 1,
        paddingHorizontal: 20,
    },
    menuWrapper: {
        marginHorizontal: 20,
        marginTop: 20,
        paddingBottom: 15,
        borderBottomColor: '#6D6D6D',
        borderBottomWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    newIcon: {
        marginTop: 30,
        width: 60,
        height: 60,
        backgroundColor: '#C39581',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 60,
    },
    title:{
        fontSize: 64,
        color: 'white', 
    }, 
    titleWrapper: {
        marginRight: 30,
        marginTop: 20,
    }


});