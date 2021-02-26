import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
export default class FooterTabsIconExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Image
          style={styles.logo}
          source={require('./assets/Logo.png')}
          />
          
        </Header>
        <Content />
        <Footer>
          <FooterTab>
            <Button>
              <Icon name="ios-people-outline" />
            </Button>
            <Button>
              <Icon name="ios-bar-chart-outline" />
            </Button>
            <Button active>
              <Icon active name="alarm-outline" />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  logo: {
    width: 180,
    height: 80,
    marginTop: -15,
    justifyContent: 'center',
    //flex: 'flex-start',
  },
  header: {
    //
    //
    //
  },
});