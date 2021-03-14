import React, { Component } from 'react';
 
import { StyleSheet, View, Alert, Button } from 'react-native';

const GetCurrentDate=()=>{

    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    //Alert.alert(date + '-' + month + '-' + year);
    // You can turn it in to your desired format
    return date + '.' + month + '.' + year;//format: dd-mm-yyyy;
}

export default GetCurrentDate;