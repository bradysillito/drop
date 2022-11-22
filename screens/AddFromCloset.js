import react from "react";
import {View, Text, ScrollView, SafeAreaView, StyleSheet} from 'react-native'
import ClosetComponent from "../components/ClosetComponent";
import TopNav from "../components/TopNav";

const AddFromClosetScreen = ({navigation})  => {
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
                        toScreen = {"SubCloset"}
                    />
                    <ClosetComponent 
                        text = {'Pants'}
                        navigation = {navigation}
                        toScreen = {"Profile"}
                    />
                    <ClosetComponent 
                        text = {'Shoes'}
                        navigation = {navigation}
                        toScreen = {"Profile"}
                    />
                    <ClosetComponent text = {'Hats'}/>
                    <ClosetComponent text = {'Tops'}/>
                </SafeAreaView>
            </ScrollView>
        </View>
    );

}

export default AddFromClosetScreen;

const styles = StyleSheet.create({
    closetContainer:{
        backgroundColor: '#1E1E1E',
        flex: 1,
        padding: 15,
        
    }
    
})