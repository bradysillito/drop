import React from "react";
import { FlatList, TouchableOpacity, View, StyleSheet, Text, Image, SafeAreaView } from 'react-native';
import PlaceHolderImage from "../assets/data/PlaceHolderImage";
import BlankImageGallery from "../components/BlankImageGallery";


const ListImage = (props) => {
    return(
        <TouchableOpacity onPress={() => props.navigation.navigate("SavedItems")}>
            <Image
                source = {props.image.background}
            />
        </TouchableOpacity>
       
    );
}


const ProfileScreen = ({navigation}) => {
    let images = PlaceHolderImage;
    return(
        <View style = {styles.container}>
            <SafeAreaView>

                {/* Top Navigation with Edit??*/}
                
                <View style = {styles.profileTitle}>
                    <Image
                        source={require('../assets/images/Profile.png')}
                        style = {styles.ProfileImage}
                    />
                    <View style = {styles.nameWrapper}>
                        <Text style = {styles.names}>Your</Text>
                        <Text style = {styles.names}>Name</Text>
                    </View>
                </View>
            </SafeAreaView>

             <View style = {styles.galleryContainer}>
                <FlatList 
                    data={images}
                    keyExtractor = {item => item.id}
                    numColumns = {2}
                    horizontal = {false}
                    scrollEnabled = {true}
                    renderItem = {({item}) => <ListImage image={item} navigation = {navigation} />}
                />
            </View>
        </View>
    );
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
       backgroundColor: '#2C2C2C'
    },
    galleryContainer:{
        alignItems: 'center'
    },
    profileTitle:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginHorizontal: 25,
        paddingBottom: 25,
        borderBottomColor: '#6D6D6D',
        borderBottomWidth: 2,
    },
    ProfileImage:{
        height: 125,
        width: 125,
        marginRight: 15,
        borderRadius: 130,
        borderColor: '#C39581',
        borderWidth: 6, 
    },
    names:{
        color: 'white',
        fontSize: 36,
        fontWeight: 'bold',
        marginLeft: 10,
    },

});