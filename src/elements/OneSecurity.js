import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions, FlatList} from 'react-native';
import securities from '../../assets/data/securities';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const OneSecurity = (props) => {
    const security = props.security;
    return (
      
      <View>
        <Text style={styles.security}>{security.company}</Text>   
        </View>
    )
  }
  
export default OneSecurity;

const styles = StyleSheet.create({

  security: {
    fontSize: 16,
    marginTop: 90,
    marginLeft: 10,
  },
});
