import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Segment, Content, Text } from 'native-base';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

export default class SegmentOutsideHeaderExample extends Component {
  render() {
    return (
      <Container>
        <Segment style={{backgroundColor: 'white', marginTop: 15}}>
          <Button first active style={{width: windowWidth/3-10, justifyContent: "center"}}>
            <Text>All</Text>
          </Button>
          <Button style={{width: windowWidth/3-10, justifyContent: "center"}}>
            <Text>Week</Text>
          </Button>
          <Button last style={{width: windowWidth/3-10, justifyContent: "center"}}>
            <Text>Today</Text>
          </Button>
        </Segment>
      </Container>
    );
  }
}