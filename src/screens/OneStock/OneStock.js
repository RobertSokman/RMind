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

const OneStock = ({route}) => {
  const { name, code, currency, price1, price2, price3, price4, price5, date1, date2, date3, date4, date5 } = route.params;
  return (
    
    <Container >
      <View >
        
          <OneSecurity name={name} code={code} price={price5} currency={currency}/>
          <LineChart
            
            data={{
              labels: [date1, date2, date3, date4, date5],
              datasets: [
                {
                  data: [
                    price1,
                    price2,
                    price3,
                    price4,
                    price5,
                  ]
                }
              ]
            }}
            width={windowWidth}
            height={windowWidth}
            yAxisLabel="$"
            //yAxisSuffix="k"
            
            chartConfig={{
              backgroundColor: "white",
              backgroundGradientFrom: "white",
              backgroundGradientTo: "white",
              color: (opacity = 1) => `rgba(50, 99, 151, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(25, 25, 25, ${opacity})`,
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
                marginTop: windowHeight/8
            }}
            
          
          />
          
      </View>  
       
    </Container>
    
    
  )
}

export default OneStock;