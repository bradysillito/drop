import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, SafeAreaView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import PlaceHolderImage from "../assets/data/PlaceHolderImage";
import TopNav from "../components/TopNav";



const ListImage = ({image}) => {
    const [selected, setSelected] = useState(false)
    

    const selectItem = () =>{
        setSelected(!selected);
    }
    return(
        <TouchableOpacity onPress={() => selectItem()}>
            <Image
                source = {image.background}
                style = {selected ? styles.selected : styles.unselected}
            />
        </TouchableOpacity>
       
    );
}

function AddFromSubClosetScreen({navigation}) {
    const images = PlaceHolderImage;

    return (
        <View style = {styles.container}>
            <SafeAreaView style = {{margin: 20}}>
                <TopNav 
                    save = {true} 
                    parent = {"Create"}
                    navigation = {navigation}
                />
                <View style = {styles.titleConatiner}>
                    <Text style = {styles.title}>Select Items</Text>
                </View>
            </SafeAreaView>
            <View style = {styles.galleryContainer}>
                <FlatList 
                    data={images}
                    keyExtractor = {item => item.id}
                    numColumns = {3}
                    horizontal = {false}
                    scrollEnabled = {true}
                    renderItem = {({item}) => <ListImage image={item} />}
                />
            </View>
        </View>
    );
}

export default AddFromSubClosetScreen;

const styles = StyleSheet.create({
    
    container:{
        flex: 1,
        backgroundColor: '#2C2C2C',
    },
    galleryContainer:{
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 1,
        marginVertical: 5,
        width: '100%'
    },
    unselected:{
        padding:5,
        width:136,
        height: 160,
        borderWidth:1,
    }, 
    selected:{
        padding: 5,
        width: 136,
        height: 160,
        borderColor : '#C39581',
        borderWidth: 6,
    },
    title:{
        fontSize:36,
        color: 'white',
        fontWeight: 'bold',
    }, 
    
})