import React from "react";
import { View , Text, StyleSheet, FlatList, Image} from "react-native";


const ListImage = ({image}) => {
    return(
        <Image
            source = {image.background}
            style = {styles.galleryImage} 
        />
    );
}

const BlankImageGallery = ({images}, {scroll}) => {

    console.log(images);
    console.log('In image Gallery')

    return(
       <View style = {styles.galleryContainer}>
        <FlatList 
            data={images}
            keyExtractor = {item => item.id}
            numColumns = {2}
            horizontal = {false}
            scrollEnabled = {scroll}
            renderItem = {({item}) => <ListImage image={item} />}
        />
       </View>
    );
}
const styles = StyleSheet.create({
    galleryContainer:{
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 1,
        marginVertical: 5,

    },
    galleryImage:{
        margin: 2,
        width: '49%',
        height: 250,
    },
})

export default BlankImageGallery;