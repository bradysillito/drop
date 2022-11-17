import React from "react";
import { Button, View, StyleSheet,Text } from 'react-native'

const CreateScreen = ({navigation}) => {
    return(
        <View style = {styles.container}>
            <Text>
                Create Screen
            </Text>
            <Button title="Click Me" onPress={()=> alert("You Clicked the Button")}/>
        </View>
    );
}

export default CreateScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
});