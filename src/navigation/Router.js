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
import AddReminder from '../screens/AddReminder';
import Profile from '../screens/Profile/Profile';
import Portfolio from '../screens/Portfolio/Portfolio';

const Stack = createStackNavigator();



const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator> 
                <Stack.Screen 
                    
                    name={"Back"}
                    component={ BottomTabNavigator }
                    options={{headerShown: false,}}
                /> 
                 <Stack.Screen 
                    name={"Screen1"}
                    component={ Screen1 }
                    options={{headerShown: true,}}
                /> 
                <Stack.Screen 
                    name={"Reminders screen"}
                    component={ Reminders }
                    options={{headerShown: true,}}
                />
                <Stack.Screen 
                    name={"Stocks"}
                    component={ StockList }
                    options={{headerShown: true,}}
                />
                <Stack.Screen 
                    name={"Settings"}
                    component={ Settings }
                    options={{headerShown: true,}}
                />  
                <Stack.Screen 
                    name={"Clients"}
                    component={ ClientList }
                    options={{headerShown: true,}}
                />
                <Stack.Screen 
                    name={"Security"}
                    component={ OneStock }
                    options={{headerShown: true,}}
                />              
               <Stack.Screen 
                    name={"Add Reminder"}
                    component={ AddReminder }
                    options={{headerShown: true,}}
                />
                <Stack.Screen 
                    name={"Profile"}
                    component={ Profile }
                    options={{headerShown: true,}}
                />  
                <Stack.Screen 
                    name={"Portfolio"}
                    component={ Portfolio }
                    options={{headerShown: true,}}
                /> 
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router ;