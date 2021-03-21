import React from "react";
import { View, Text, FlatList, Dimensions, Pressable } from "react-native";
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import {useNavigation} from '@react-navigation/native';
import portfolio from "../../../assets/data/portfolio";
import PortfolioItem from "./PortfolioList";


const PortfolioFullList = (props) => {
    const navigation = useNavigation();

    return (
        <View >
            <FlatList 
                data={portfolio}
                renderItem={({item}) => 
                
                <Pressable onPress={() => navigation.navigate("Portfolio")} 
                           style={{marginTop: 10}}>
                    <PortfolioItem portfolio={item} />
                </Pressable>
                }
                
            />
        </View>
    );
};

export default PortfolioFullList;