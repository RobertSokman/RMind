import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import FooterTabsIconExample from "./Footer";
import HeaderLogo from "./Header";

const Template = (props) => {
  return (
      <Container>
        <View>
          <HeaderLogo/>              
          <FooterTabsIconExample/>
        </View>
      </Container>
  )
}

export default Template;


