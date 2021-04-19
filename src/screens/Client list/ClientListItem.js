import React, {useEffect, useState} from "react";
import { View, Text, FlatList, Dimensions, Pressable } from "react-native";
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import {useNavigation} from '@react-navigation/native';
import ClientName from "../../elements/ClientList/Clients";
import { API, graphqlOperation } from "aws-amplify";
import { listClients } from "../../graphql/queries";


const ClientListItem = (props) => {
    const navigation = useNavigation();

    const [clients, setClients] = useState([]);

    useEffect( () => {
        const fetchClients = async () => {
            try {
                const clientsResult = await API.graphql(
                    graphqlOperation(listClients)
                )
                setClients(clientsResult.data.listClients.items);
            } catch (e) {
                console.log(e);
            }
        }
        fetchClients();
    }, [])

    return (
        <View >
            <FlatList 
                data={clients}
                renderItem={({item}) => 
                
                <Pressable onPress={() => navigation.navigate("Profile", {name: item.name, surname: item.surname, country: item.nationality,
                                                                               birthday: item.birthday, sector: item.sector, language: item.languageOfReporting, 
                                                                            currency: item.reportingCurrency, id: item.id, customerNo: item.customerNo })}
                >
                    <ClientName client={item} />
                </Pressable>
                }
                
            />
        </View>
    );
};

export default ClientListItem;