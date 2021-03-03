import React from 'react';
import {View, Text, Image} from 'react-native';

const Security = (props) => {
    const security = props.security;
    return (
      <View>
          <Text>{security.company}</Text>
          <Text>Price {security.price}</Text>
      </View>
    )
  }
  
export default Security;