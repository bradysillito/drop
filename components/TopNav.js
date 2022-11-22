import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';



const saveButton = () =>{
    return(
        <TouchableOpacity style = {styles.saveButton}>
            <Text style = {{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
                Save
            </Text>
        </TouchableOpacity>
    );

}

function TopNav(props) {
    let save;
    const parentScreen = props.parent;
    const navigation = props.navigation;

    if(props.save){
        save = saveButton();
    } else {
        save = <View/>
    }

    return (
        <View style = {styles.buttonWrapper}>
            <TouchableOpacity onPress={ ()=> Alert.alert(
                "Are You sure you want to exit?",
                "If you continue you will loose your current items",
                [{
                    text: "Cancel",            
                },
                {
                    text: "OK",
                    onPress: () => navigation.navigate(parentScreen)
                }]
            )}>
                <MaterialCommunityIcons 
                    name = "close" 
                    color={'white'} 
                    size = {35} 
                />     
            </TouchableOpacity>

            {save}
                
        </View>
    );
}

export default TopNav;

const styles = StyleSheet.create({
    buttonWrapper:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    saveButton:{
        backgroundColor: '#C39581',
        borderRadius: 5,
        padding: 10,
        justifyContent: 'center',
        alignContent: 'center',
        paddingHorizontal: 15, 
    },
})