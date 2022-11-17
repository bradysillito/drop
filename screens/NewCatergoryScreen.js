import React from "react";
import { Button, View, StyleSheet,Text } from 'react-native'

const NewCatergoryScreen = ({navigation}) => {
    return(
        <View style = {styles.container}>
            <Text>
                New Catergory Screen
            </Text>
            <Button title="Click Me" onPress={()=> alert("You Clicked the Button")}/>
        </View>
    );
}

export default NewCatergoryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
});