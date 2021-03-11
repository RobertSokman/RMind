import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions, FlatList} from 'react-native';
import securities from '../../assets/data/securities';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Onesecurity = ({name, code, price}) => 
  <View style={{marginTop: 30}}>
    <Text style={{textAlign: "center", fontSize: 20, fontWeight: "bold"}}>{name}</Text>
    <Text style={{textAlign: "center", fontSize: 18}}>{code}</Text>
    <Text style={{textAlign: "center", fontSize: 18}}>{price}</Text>
  </View>
export default Onesecurity;
