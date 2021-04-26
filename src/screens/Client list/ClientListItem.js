import React, {useEffect, useState} from "react";
import { View, Text, FlatList, Dimensions, Pressable, TextInput } from "react-native";
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import {useNavigation} from '@react-navigation/native';
import ClientName from "../../elements/ClientList/Clients";
import { API, graphqlOperation } from "aws-amplify";
import { listClients } from "../../graphql/queries";
import { Button } from "native-base";


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
                
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    
                <ClientName client={item} />
                
                <Pressable onPress={() => navigation.navigate("Profile", {name: item.name, surname: item.surname, country: item.nationality,
                                                                               birthday: item.birthday, sector: item.sector, language: item.languageOfReporting, 
                                                                            currency: item.reportingCurrency, id: item.id, customerNo: item.customerNo })}
                style={{borderWidth: 2, width: windowWidth/5, borderColor:'#003662',
                    height: windowHeight/25, borderRadius: 10, backgroundColor: '#003f5c', alignSelf:'center', marginRight: 10}}
                >
                    
                    <Text style={{textAlign: 'center', color: 'white', marginTop: 5}}>View</Text>
                    
                </Pressable>
                </View>
                }
                
            />
        </View>
    );
};

export default ClientListItem;