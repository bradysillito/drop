import React, { useState } from "react";
import {View, StyleSheet, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, Button } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import * as ImagePicker from "expo-image-picker";

//Assetc needed for the image loading page
import ImageGallery from "../components/ImageGallery";
import TopNav from "../components/TopNav";

const UploadPicture = (props) => {

    return(
        <TouchableOpacity 
            style = {styles.uploadPictureWrapper}
            onPress = {() => alert('swag')}
            >
            <MaterialCommunityIcons 
                name= {props.iconName}
                size = {35}
                color = 'white'
                style = {{alignSelf: 'center', marginRight: 5}}
            />
            <Text style = {{alignSelf: 'center', color: 'white', fontSize: 18}}> {props.uploadType} </Text>
        </TouchableOpacity>
);}


const NewCatergoryScreen = ({navigation}) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const pickImages = async () => {
        setIsLoading(true);
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsMultipleSelection: true,
            selectionLimit: 10,
            aspect: [4,3],
            quality: 1,
        });
        setIsLoading(false);

        console.log('Successfull Grabbed Images');
        console.log(result.assets.length);

        if (!result.canceled){
            //setImages(result.uri ? [result.uri] : result.selected);
            setImages(result.assets);
        }
    }

    return(
        <View style = {styles.container}>
            <SafeAreaView>
                <View style = {styles.menuWrapper}>
                    <TopNav save = {true} parent = {"Closet"} navigation = {navigation} />
                    <Text style = {styles.title}>
                        Name
                    </Text>
                    <KeyboardAvoidingView 
                        behavior = {Platform.OS === 'ios' ? 'padding' : 'height'}
                        style = {styles.writeNameWrapper}>
                            <TextInput 
                                style = {styles.inputText} 
                                placeholder = {"Write Your New Catergory Name..."}
                                placeholderTextColor = '#ACACAC'
                                textDecorationColor = 'white'
                            />
                    </KeyboardAvoidingView>
                </View>
                <View style = {styles.addPhotoOptions}>
                    <Text style = {{fontSize: 18, color: 'white'}}>
                        Add Photos to New Catergory
                    </Text>
                </View>
                <UploadPicture uploadType = {'From Camera Roll'} iconName = {'camera-burst'} onPress = {pickImages}/>
                <UploadPicture uploadType = {'From Files'} iconName = {'folder-outline'}/>
                <UploadPicture uploadType = {'From Device'} iconName = {'micro-sd'}/>
            </SafeAreaView>     
            <Button title="Click Me" onPress={pickImages}/>
            <ImageGallery images={images} scroll = {true}/>
        </View>
    );
}

export default NewCatergoryScreen;

const styles = StyleSheet.create({
    addPhotoOptions:{
        paddingVertical: 10,
        borderBottomColor: '#ACACAC', 
        borderBottomWidth: 1,
        marginHorizontal: 15
    },
    buttonWrapper:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    container: {
        flex: 1,
        backgroundColor: '#2C2C2C',
    },
    inputText:{
        fontSize: 24,
        color: 'white',
    },
    menuWrapper:{
        padding: 15
    },
    saveButton:{
        backgroundColor: '#C39581',
        borderRadius: 5,
        padding: 10,
        justifyContent: 'center',
        alignContent: 'center',
        paddingHorizontal: 15, 
    },
    title:{
        fontSize:36,
        color: 'white',
        fontWeight: 'bold',
    },
    uploadPictureWrapper:{
        flexDirection: 'row',
        paddingTop: 10,
        marginHorizontal: 15,
    },
    writeNameWrapper:{
        backgroundColor: '#454545',
        opacity: 1,
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        marginTop: 10,
        height: 50,
        borderRadius: 2,
    },
});