import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Dimensions, Pressable } from 'react-native';
import Fontisto from "react-native-vector-icons/Fontisto";
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import { SearchBar } from 'react-native-elements';

export default class Lala extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
        //ref={ search => this.search.clear() = search}
        
      />
    );
  }
}



const styles = StyleSheet.create({

    searchButton: {
      flexDirection: 'row', //puts items side by side
      borderRadius: 10, //this command is used to make rounded rectangles
      zIndex: 100, //
      position: 'absolute',
      backgroundColor: '#f5f5f5',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      alignContent: 'center',
      marginTop: windowHeight/9,
      marginLeft: 10,
      width: windowWidth -20,
      height: 40,
      borderWidth: 0.24,
      borderColor: "#a9a9a9"
    },
    
  });