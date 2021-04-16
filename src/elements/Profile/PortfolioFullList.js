import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Dimensions, Pressable } from "react-native";
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import { useNavigation } from '@react-navigation/native';
import PortfolioItem from "./PortfolioList";
import { API, graphqlOperation } from "aws-amplify";
import { listPortfolios } from "../../graphql/queries";


const PortfolioFullList = ( {owner} ) => {
    const navigation = useNavigation();
    
    const sth = owner;
    const [portfolios, setPortfolios] = useState([]);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const portfoliosResult = await API.graphql(
                    graphqlOperation(listPortfolios, {filter: { ownerNo: { eq: sth } }})
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

                renderItem={({ item }) =>
                    <Pressable onPress={() => navigation.navigate("Portfolio", { pid: item.portfolioNo, pidNumerical: item.portfolioNoNumerical, initialValue: item.initialValue })}
                        style={{ marginTop: 10 }}>
                        <PortfolioItem portfolio={item} />
                    </Pressable>
                }

            />
        </View>
    );
};

export default PortfolioFullList;