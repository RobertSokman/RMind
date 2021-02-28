import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default class FooterTabsIconExample extends Component {
  render() {
    return (
      <Container>
        <Footer style={{position: 'absolute', left: 0, right: 0, top: windowHeight-55}}>
          <FooterTab>
            <Button>
              <Icon name="ios-people-outline" />
            </Button>
            <Button>
              <Icon name="ios-bar-chart-outline" />
            </Button>
            <Button >
              <Icon name="home" />
            </Button>
            <Button onPress={() => console.warn('SearchButton was clicked')}>
              <Icon name="alarm-outline" />
            </Button>
            <Button>
              <Icon name="settings-outline" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
  }

//to make button in nav bar active: <Button active> <Icon active name="alarm-outline" />
