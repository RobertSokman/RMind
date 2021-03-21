import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions, Pressable} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import { Icon } from 'native-base';

const PortfolioItem = (props) => {
    const portfolio = props.portfolio;
    return (
      <View>
        
        <Text style={{fontSize: 14, marginLeft: windowWidth/14}}>{portfolio.portfolio}</Text>
          
      </View>
    )
  }
  
export default PortfolioItem;