import React, { useState } from "react";
import { Image, View, StyleSheet,Text, SafeAreaView,TouchableOpacity, Alert, Button, ScrollView } from 'react-native'
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import PlaceHolderImage from "../assets/data/PlaceHolderImage";
import ImageGallery from "../components/ImageGallery";
import BlankImageGallery from "../components/BlankImageGallery";



const CreateScreen = ({navigation}) => {
    const [image, setImage] = useState();
    

    return(
        <View style = {styles.container}>
            <SafeAreaView>
                {/* Headers, Nav Icons*/}
                <View style = {styles.buttonWrapper}>

                    <TouchableOpacity onPress={ ()=> Alert.alert(
                        "Are You sure you want to exit?",
                        "If you continue you will loose your current items",
                        [{
                            text: "Cancel",
                            
                        },
                        {
                            text: "OK",
                            onPress: () => navigation.navigate("Create")
                        }
                        ]
                    )}>
                        <MaterialCommunityIcons 
                            name = "close" 
                            color={'white'} 
                            size = {35} 
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.saveButton}>
                        <Text style = {{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
                            Save
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Screen Title */}
                <View style = {styles.menuWrapper}>
                    <Text style = {styles.title}>New Fit</Text>
                </View>
            </SafeAreaView>

            <ScrollView>
                {/* Reference Title, Choose Button, Image */}
                <View style = {styles.header}>
                    <View style = {styles.addOptions} >
                        <Text style = {styles.subHeading}>Reference</Text>
                        <Button
                            color={'#C39581'}
                            title="Choose Image"
                            onPress={() => alert("Pressed the Choose Image Button")}
                            />
                    </View>
                
                    <Image 
                        style = {styles.referenceImage} 
                        source = {image ? image : require('../assets/images/Blank.png') }
                    />
                </View>

                {/* Choose your Own Items options */}
                <View style = {styles.addOptions}>
                        <Text style = {styles.subHeading}>Your Items</Text>
                       
                       <TouchableOpacity onPress={() => navigation.navigate("AddFromCloset")}>
                            <MaterialCommunityIcons
                                name = "plus" 
                                color={'white'} 
                                size = {35} 
                            />
                       </TouchableOpacity>
                       
                </View>

                {/* Place Holder Images for Gallery */}
                <BlankImageGallery images = {PlaceHolderImage} scroll = {false} />

            </ScrollView>
            

        </View>
    );
}

export default CreateScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2C2C2C',
        padding: 15
    },
     buttonWrapper:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    }, 
    header:{
        borderBottomColor: '#6D6D6D',
        borderBottomWidth: 2,
    },
    menuWrapper:{
        borderBottomColor: '#6D6D6D',
        borderBottomWidth: 2,
        paddingBottom: 5,
    },
    saveButton:{
        backgroundColor: '#C39581',
        borderRadius: 5,
        padding: 5,
        justifyContent: 'center',
        alignContent: 'center',
        paddingHorizontal: 10, 
    },
    subHeading:{
        marginTop: 10,
        fontSize: 18,
        color: 'white',
    },
    referenceImage:{
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 15,
        width: 350,
        height: 350,
    },
    addOptions:{
        flexDirection: "row",
        justifyContent: 'space-between',
        alignContent: 'center',
    },
    title:{
        fontSize: 64,
        color: 'white', 
    },
});