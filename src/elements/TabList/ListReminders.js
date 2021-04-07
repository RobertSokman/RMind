import React, { Component, View, Text } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import TabOne from './tabOne';
import TabTwo from './tabTwo';
import TabThree from './tabThree';
import GetCurrentDate from "./CurrentDate";
export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        
        <Tabs>
          <Tab heading="All">
            <TabOne />
          </Tab>
          
          <Tab heading="Today">
            <TabThree />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}