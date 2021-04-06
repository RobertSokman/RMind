import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const TradingListElement = (props) => {
    const trade = props.trade;
    return (
      <View  >
          <Text style={styles.security}>Trading Activity: {trade.type}</Text>
          <Text style={styles.security}>Security name: {trade.company}</Text>
          <Text style={styles.security}>Date of transaction: {trade.dateOfTransaction}</Text>
          <Text style={styles.security}>Initial amount: {trade.amount}</Text>
      </View>
    )
  }
  
export default TradingListElement;

const styles = StyleSheet.create({

  security: {
    fontSize: 16,
    //justifyContent: 'center',
    flex: 2,
    marginBottom:15,
    marginLeft: 10,
  },
  
});
