import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions, FlatList} from 'react-native';
import securities from '../../assets/data/securities';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Onesecurity = ({name, code, price, currency}) => 
  <View style={{marginTop: 30}}>
    <Text style={{textAlign: "center",color: "white", alignSelf: "center",fontSize: 22, fontWeight: "bold", backgroundColor: 35297, width: windowWidth-60, height: 40}}>{name}</Text>
    <View style={{backgroundColor: "lightgray", width: windowWidth-60, height: 100, alignSelf: "center"}}>
      <Text style={{fontSize: 15,  textAlign: "center",color: 35297, alignSelf: "center", fontWeight: "bold"}}>DESCRIPTION:</Text>
      <Text style={{fontSize: 15,  textAlign: "center",color: "black", alignSelf: "center",}}>{code}</Text>
      <Text style={{fontSize: 15,  textAlign: "center",color: "black", alignSelf: "center"}}>Currency: {currency}</Text>
     </View>
     <Text style={{textAlign: "center", fontSize: 40, marginTop: 20}}>{price} $</Text>
  </View>
export default Onesecurity;
