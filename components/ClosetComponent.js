import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const ClosetComponent = (props) => {
    const navTo = props.toScreen ? props.toScreen : "Closet";
    const navigation = props.navigation;
    const itemCount = props.itemCount ? props.itemCount : 0;

    return(
        <TouchableOpacity style = {styles.cardWrapper}
            onPress = {()=> navigation ? navigation.navigate(navTo) : alert("No Screen Provided")}>
            <View style = {styles.card}/>
            <View style = {styles.description}>
                <Text style ={{color: 'white', fontWeight: 'bold', fontSize:24,}}>{props.text}</Text>
                <Text style ={{color: 'white', fontSize:18,}}>{itemCount} Items</Text>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    card:{
        width: '100%',
        height: 200,
        backgroundColor : '#454545',
        marginBottom: 5,
    },
    cardWrapper:{
        marginBottom:15,
    },
    description:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})


export default ClosetComponent;