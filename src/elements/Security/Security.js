import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Security = (props) => {
    const security = props.security;
    return (
      <View style={{flexDirection: 'row', backgroundColor: 'lightgray'}} >
          <Text style={styles.security}>{security.company}</Text>
          <Text style={styles.securityPrice}>Price {security.price}</Text>
      </View>
    )
  }
  
export default Security;

const styles = StyleSheet.create({

  security: {
    fontSize: 16,
    //justifyContent: 'center',
    flex: 2,
    marginBottom: 40,
  },
  securityPrice: {
    fontSize: 16,
    //justifyContent: 'center',
    textAlign: 'right',
    flex: 1,
    marginRight: 15
  },

});
