import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Reminders from "../screens/Reminders/Reminders";
import Screen1 from '../screens/Screen1';

const Stack = createStackNavigator();



const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator> 
                <Stack.Screen 
                    component={ Screen1 }
                    name={"Home screen"}
                    options={{headerShown: false,}}
                /> 
                <Stack.Screen 
                    name={"Reminders screen"}
                    component={ Reminders }
                    options={{headerShown: false,}}
                />         
               
                
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router ;