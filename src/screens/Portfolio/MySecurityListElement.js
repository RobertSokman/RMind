import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const TradingListElement = (props) => {
    const mySecurity = props.mySecurity;
    return (
      <View style={{borderBottomColor: 'black', borderBottomWidth: 0.5, width: windowWidth}}>
          <Text style={styles.security}>- {mySecurity.company}</Text>
          <Text style={styles.security}>Amount: {mySecurity.amount}</Text>
      </View>
    )
  }
  
export default TradingListElement;

const styles = StyleSheet.create({

  security: {
    fontSize: 16,
    //justifyContent: 'center',
    //flex: 2,
    marginBottom:15,
    marginLeft: 10,
  },
  
});