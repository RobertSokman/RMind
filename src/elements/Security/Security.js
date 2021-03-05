import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Security = (props) => {
    const security = props.security;
    return (
      <View style={{flexDirection: 'row', borderColor: 'lightgray', borderBottomWidth: 0.5}} >
          <Text style={styles.security}>{security.company}</Text>
          <Text style={styles.securityPrice}>$ {security.price}</Text>
      </View>
    )
  }
  
export default Security;

const styles = StyleSheet.create({

  security: {
    fontSize: 16,
    //justifyContent: 'center',
    flex: 2,
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 10,
  },
  securityPrice: {
    fontSize: 16,
    //justifyContent: 'center',
    textAlign: 'right',
    flex: 1,
    marginRight: 15,
    marginTop: 20,
  },

});
