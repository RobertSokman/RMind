import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { Dimensions, Pressable } from 'react-native';
import { Container, Header, Title } from 'native-base';
import BottomTabNavigator from "../../navigation/BottomTabNavigator";
import securities from "../../../assets/data/securities";
import OneSecurity from "../../elements/OneSecurity";
import { LineChart } from "react-native-chart-kit";
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const OneStock = () => {
  
  return (
    
    <Container >
      <View style={{alignItems:"center"}}>
        
          <OneSecurity name="Security name" code="Security code" price='23'/>
          <LineChart
            data={{
              labels: ["January", "February", "March"],
              datasets: [
                {
                  data: [
                    39,
                    49,
                    27
                  ]
                }
              ]
            }}
            width={windowWidth}
            height={250}
            yAxisLabel="$"
            yAxisSuffix="k"
            
            chartConfig={{
              backgroundColor: "#e26a00",
              backgroundGradientFrom: "#fb8c00",
              backgroundGradientTo: "#ffa726",
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16
              },
              ropsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726"
              }
            }}
            bezier
            style={{
                marginVertical: 8,
                borderRadius: 16,
                marginTop: 160
            }}
            
          
          />
          
      </View>  
       
    </Container>
    
    
  )
}

export default OneStock;