import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Dimensions, Pressable } from 'react-native';
import Fontisto from "react-native-vector-icons/Fontisto";
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const SearchButton = (props) => {
    return (
        <Pressable 
            style={styles.searchButton} 
            onPress={() => console.warn('SearchButton was clicked')}
        >
            <Fontisto name="search" size={20} color={'white'}/>             
            <Text style = {styles.text}>search</Text>
        </Pressable>
  )
}

export default SearchButton;

const styles = StyleSheet.create({
    text: {
      
      textAlign: "center",
      textAlignVertical: "center",
      fontSize: 15,
    },
    searchButton: {
      flexDirection: 'row', //puts items side by side
      borderRadius: 20, //this command is used to make rounded rectangles
      zIndex: 100, //
      position: 'absolute',
      backgroundColor: '#f5f5f5',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      alignContent: 'center',
      marginTop: 180,
      marginLeft: 10,
      width: windowWidth -20,
      height: 40,
      borderWidth: 0.25,
      borderColor: "#a9a9a9"
    },
    
  });