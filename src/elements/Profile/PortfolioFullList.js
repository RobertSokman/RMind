import React, {useEffect, useState} from "react";
import { View, Text, FlatList, Dimensions, Pressable } from "react-native";
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import {useNavigation} from '@react-navigation/native';
import PortfolioItem from "./PortfolioList";
import { API, graphqlOperation } from "aws-amplify";
import { listPortfolios } from "../../graphql/queries";


const PortfolioFullList = (name, surname) => {
    const navigation = useNavigation();


    const [portfolios, setPortfolios] = useState([]);

    useEffect( () => {
        const fetchClients = async () => {
            try {
                const portfoliosResult = await API.graphql(
                    graphqlOperation(listPortfolios)
                )
                setPortfolios(portfoliosResult.data.listPortfolios.items);
            } catch (e) {
                console.log(e);
            }
        }
        fetchClients();
    }, [])

    return (
        <View >
            <FlatList 
                data={portfolios}
                
                renderItem={({item}) => 
                
                <Pressable onPress={() => navigation.navigate("Portfolio", {pid: item.portfolioNo})} 
                           style={{marginTop: 10}}>
                    <PortfolioItem portfolio={item} />
                </Pressable>
                }
                
            />
        </View>
    );
};

export default PortfolioFullList;