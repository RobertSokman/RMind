import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions, FlatList} from 'react-native';
import securities from '../../assets/data/securities';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Onesecurity = ({name, code, price, currency}) => 
  <View style={{marginTop: 30}}>
    
    <View style={{backgroundColor: "lightgray", width: windowWidth-60,  alignSelf: "center", borderRadius: 20}}>
      <Text style={{fontSize: 18,  textAlign: "center",color: '#003662', alignSelf: "center", fontWeight: "bold", marginTop: 10}}>{name}</Text>
      <Text style={{fontSize: 18,  textAlign: "center",color: "black", alignSelf: "center",}}>Security code: {code}</Text>
      <Text style={{fontSize: 18,  textAlign: "center",color: "black", alignSelf: "center"}}>Trading currency: {currency}</Text>
      <Text style={{textAlign: "center", fontSize: 18, marginTop: 20, marginBottom: 10}}>Current price: {price} $</Text>
     </View>
     
  </View>
export default Onesecurity;
