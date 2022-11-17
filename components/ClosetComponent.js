import React from "react";
import { View, StyleSheet, Text } from "react-native";

const ClosetComponent = (props) => {
    return(
        <View style = {styles.cardWrapper}>
            <View style = {styles.card}/>
            <View style = {styles.description}>
                <Text style ={{color: 'white', fontWeight: 'bold', fontSize:24,}}>{props.text}</Text>
                <Text style ={{color: 'white', fontSize:18,}}>Item Count</Text>
            </View>
        </View>
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