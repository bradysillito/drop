import React from 'react';
import {View, Alert, SafeAreaView, StyleSheet, TouchableOpacity, Text, FlatList, Image} from 'react-native'
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import PlaceHolderImage from '../assets/data/PlaceHolderImage';


const ListImage = (props) => {
    return(
        <TouchableOpacity onPress={() => alert("Cool")}>
            <Image
                source = {props.image.background}
            />
        </TouchableOpacity>
       
    );
}


function SavedItemsScreen({navigation}) {
    const images = PlaceHolderImage;
    return (
        <View style = {styles.container}>
            <SafeAreaView>
                {/*Top Nav Conatainer*/}
                <View style = {styles.topNav}>

                    {/* Back Button */}
                    <TouchableOpacity onPress={() => navigation.navigate("Profile")} >
                        <MaterialCommunityIcons name='arrow-left' size = {35} color = 'white'/>
                    </TouchableOpacity>
             
                    {/* Edit Button */}
                    <TouchableOpacity onPress={() => Alert.alert(
                        "Edit",
                        "Press ok",
                        [
                            {text: 'OK'},
                            {text: 'Cancel'}
                        ]
                    )}>
                        <MaterialCommunityIcons name='pencil' size = {35} color = 'white'/>
                    </TouchableOpacity>
                </View>

                <Text style = {styles.subHeading}>Reference</Text>
                <Image 
                    source = {require('../assets/images/Blank.png')}
                    style = {styles.referancePhoto}
                />
                <View style = {{marginTop: 15, borderBottomColor: '#6D6D6D',borderBottomWidth: 2,}}/>
            </SafeAreaView>

            <Text style = {styles.subHeading}>Your Items</Text>
                
            <View style = {{flex:1, marginTop: 10}}>
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

export default SavedItemsScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 15,
        backgroundColor: '#2C2C2C',
    },
    topNav:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    subHeading:{
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 10,
    },
    referancePhoto:{
        alignSelf: 'center',
        marginTop: 10,
        width: 400,
        height: 350,
    },
    
})