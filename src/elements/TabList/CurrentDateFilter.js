import React, { useEffect, useState } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
import { Dimensions, View, FlatList } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const CurrentDateFilter=()=>{
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();

  //Alert.alert(date + '-' + month + '-' + year);
  // You can turn it in to your desired format
  return year + '-0' + month + '-0' + date;//format: yyyy-mm-dd;
}

export default CurrentDateFilter;