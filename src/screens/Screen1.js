import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';



const Screen1 = () => {
  return (
      <Container>
        <View>
          <Header>
            <Image
              style={styles.logo}
              source={require('../../assets/Logo.png')}
            />
          </Header>
                      
          
        </View>
      </Container>
  )
}

export default Screen1;

const styles = StyleSheet.create({

    logo: {
      width: 180,
      height: 80,
      justifyContent: 'center',
      alignSelf: 'center',
      //flex: 'flex-start',
    },
  
  });
  