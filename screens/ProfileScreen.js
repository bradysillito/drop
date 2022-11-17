import React from "react";
import { Button, View, StyleSheet, Text } from 'react-native'

const ProfileScreen = ({navigation}) => {
    return(
        <View style = {styles.container}>
            <Text>
                Profile Screen
            </Text>
            <Button title="Click Me" onPress={()=> alert("You Clicked the Button")}/>
        </View>
    );
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
});