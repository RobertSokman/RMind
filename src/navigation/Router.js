import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Reminders from "../screens/Reminders/Reminders";
import Screen1 from '../screens/Screen1';
import BottomTabNavigator from "./BottomTabNavigator";
import Settings from "../screens/Settings/Settings";
import StockList from "../screens/StockList/StockList";
import ClientList from "../screens/Client list/ClientList";
import OneStock from "../screens/OneStock/OneStock";

const Stack = createStackNavigator();



const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator> 
                <Stack.Screen 
                    
                    name={"Home screen"}
                    component={ BottomTabNavigator }
                    options={{headerShown: false,}}
                /> 
                 <Stack.Screen 
                    name={"Screen1"}
                    component={ Screen1 }
                    options={{headerShown: false,}}
                /> 
                <Stack.Screen 
                    name={"Reminders screen"}
                    component={ Reminders }
                    //options={{headerShown: false,}}
                />
                <Stack.Screen 
                    name={"Stocks"}
                    component={ StockList }
                    options={{headerShown: false,}}
                />
                <Stack.Screen 
                    name={"Settings"}
                    component={ Settings }
                    options={{headerShown: false,}}
                />  
                <Stack.Screen 
                    name={"Clients"}
                    component={ ClientList }
                    options={{headerShown: false,}}
                />
                <Stack.Screen 
                    name={"OneStock"}
                    component={ OneStock }
                    options={{headerShown: false,}}
                />              
               
                
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router ;