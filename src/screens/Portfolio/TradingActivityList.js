import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Dimensions, Pressable } from "react-native";
import Security from "../../elements/Security/Security";
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import {useNavigation} from '@react-navigation/native';
import OneStock from "../OneStock/OneStock";
import { Item } from "native-base";
import { API, graphqlOperation } from "aws-amplify";
import { listTradingActivitys } from "../../graphql/queries";
import TradingListElement from "./TradingListElement";

const TradingActivityList = ( {parentPortfolio}) => {
    const navigation = useNavigation();
    
    const [trades, setTrades] = useState([]);
    const parentPortfolioNo = parentPortfolio;

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const tradesResult = await API.graphql(
                    graphqlOperation(listTradingActivitys, {filter: { portfolioNo: { eq: parentPortfolioNo } }, limit: 1000})
                    )
                setTrades(tradesResult.data.listTradingActivitys.items);
            } catch (e) {
                console.log(e);
            }
        }
        fetchClients();
    }, [])
    return (
        <View>
            
            <FlatList 
                style={{marginTop: 5}}
                data={trades}
                renderItem={({item}) => 
                <Text style={{marginBottom: 35}}>
                    <TradingListElement trade={item}/>
                </Text>
                }
                
            />
        </View>
    );
};

export default TradingActivityList;