import react from "react";
import {View, Text, ScrollView, SafeAreaView, StyleSheet} from 'react-native'
import ClosetComponent from "../components/ClosetComponent";
import TopNav from "../components/TopNav";

const AddItems = ({navigation})  => {
    return(

        <View style = {styles.closetContainer}>
            <ScrollView>
                <SafeAreaView>
                    <TopNav 
                        save = {false} 
                        parent = {"Create"}
                        navigation = {navigation}
                    />

                    <ClosetComponent 
                        text = {'Jackets'}
                        navigation = {navigation}
                        toScreen = {"Profile"}
                    />
                    <ClosetComponent text = {'Pants'} />
                    <ClosetComponent text = {'Shoes'}/>
                    <ClosetComponent text = {'Hats'}/>
                    <ClosetComponent text = {'Tops'}/>
                </SafeAreaView>
            </ScrollView>
        </View>
    );

}

export default AddItems;

const styles = StyleSheet.create({
    closetContainer:{
        backgroundColor: '#1E1E1E',
        flex: 1,
        padding: 15,
        
    }
    
})