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
            <Text>search</Text>
        </Pressable>
  )
}

export default SearchButton;

const styles = StyleSheet.create({
    textTest: {
      
      textAlign: "center",
      textAlignVertical: "center",
      marginTop: 130,
      fontSize: 30,
      fontWeight: 'bold',
    },
    searchButton: {
      flexDirection: 'row', //puts items side by side
      borderRadius: 20, //this command is used to make rounded rectangles
      zIndex: 100, //
      position: 'absolute',
      backgroundColor: 'gray',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      alignContent: 'center',
      marginTop: 180,
      marginLeft: 10,
      width: windowWidth -20,
      height: 40,
    },
    
  });