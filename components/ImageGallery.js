import React from "react";
import { View , Text, StyleSheet, FlatList, Image} from "react-native";


const ListImage = ({image}) => {
    console.log('IMAGE URI:  ' + image['uri']);
    
    return(
        <Image
            source = {{uri: image["uri"]}}
            style = {styles.gallerImage} 
        />
    );
}

const ImageGallery = (props) => {

    console.log(props.images);
    console.log('In image Gallery')

    return(
       <View style = {styles.galleryContainer}>
         <Text style = {styles.galleryText}> Selected Photos</Text>
        <FlatList 
            data={props.images}
            keyExtractor = {item => item["uri"]}
            numColumns = {3}
            horizontal = {false}
            scrollEnabled = {props.scroll}
            renderItem = {({item}) => <ListImage image={item}/>}
        />
       </View>
    );
}
const styles = StyleSheet.create({
    galleryContainer:{
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 1

    },
    galleryText:{
        marginBottom: 5,
        color: 'white'
    },
    gallerImage:{
        margin: 2,
        height: 146,
        width: '32%',
    },
})

export default ImageGallery;