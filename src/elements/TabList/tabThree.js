import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import GetCurrentDate from "./CurrentDate";

export default class Tab3 extends Component {
  render() {
    return (
      <Container >
        
        <Content>
          <List >
            <ListItem itemDivider>
              <Text>
                <GetCurrentDate />
              </Text>
            </ListItem>                    
            <ListItem>
              <Text>Aaron Bennet mortgage payment</Text>
            </ListItem>
            <ListItem>
              <Text>Ali Connors mortgage payment</Text>
            </ListItem>
            <ListItem>
              <Text>Bradley Horowitz mortgage payment</Text>
            </ListItem>
            <ListItem>
              <Text>Bradley Horowitz mortgage payment</Text>
            </ListItem>
            <ListItem>
              <Text>Bradley Horowitz mortgage payment</Text>
            </ListItem> 
            <ListItem>
              <Text>Bradley Horowitz mortgage payment</Text>
            </ListItem>
            <ListItem>
              <Text>Bradley Horowitz mortgage payment</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}