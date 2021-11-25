import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { StyleSheet, View, FlatList, TextInput, Modal, Image } from 'react-native';
import baseUrl from '../../baseUrl';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { Avatar, Button, Card, Title, Text } from 'react-native-paper';
import filter from 'lodash.filter';
import UpdateVaccinationDetails from './UpdateVaccinationDetails';


function ChildrenListDisplay() {
    const API_ENDPOINT = 'https://randomuser.me/api/?seed=1&page=1&results=20';
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [id, setid] = useState(0);
    const [childID, setchildID] = useState(0);
    const [childrens, setchildrens] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const [query, setQuery] = useState('');
    const [fullData, setFullData] = useState([]);
    const closeModal = () => {
        setModalVisible(false);
    }
    const LeftContent = props => <Avatar.Icon {...props} icon={() => (
        <Image
            source={require('../../assets/images/baby.png')}
            style={{ width: 55, height: 55, borderRadius: 20 }}
        />
    )} size={40} />
    const child_details = (name, dob) => {
        return (
            <View>
                <Text style={styles.subtitle}>Parent Name: {name}</Text>
                {/* <Text style={styles.subtitle}>DOB: {dob}</Text> */}
            </View>
        )
    }
    const handleSearch = text => {
        const formattedQuery = text.toLowerCase();
        // setQuery(text);
        console.log("Formatted Query: " + formattedQuery)
        // const filteredData = filter(fullData[0], user => {
        //     return contains(user, formattedQuery);
        // });
        // setchildrens(filteredData);

    };
    const contains = (val, query) => {
        // const { first, last } = name;

        // if (first.includes(query) || last.includes(query) || email.includes(query)) {
        if (val.childID.includes(query) || val.parentName.includes(query)) {
            return true;
        }

        return false;
    };
    function renderHeader() {
        return (
            <View
                style={{
                    backgroundColor: '#fff',
                    padding: 10,
                    marginVertical: 10,
                    borderRadius: 20
                }}
            >
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    clearButtonMode="always"
                    value={query}
                    onChangeText={queryText => {
                        handleSearch(queryText);
                        setQuery(query)
                    }}
                    placeholder="Search"
                    style={{ backgroundColor: '#fff', paddingHorizontal: 20 }}
                />
            </View>
        );
    }

    const getChildList = () => {
        setIsLoading(true);
        axios.put(baseUrl + "/polioworker/children").
            then(function (response) {
                let temp_arr = [];
                temp_arr.push(response.data.data);
                setchildrens(temp_arr)
                setFullData(temp_arr);
                setIsLoading(false)
            }).catch(function (error) {
                setIsLoading(false)
                console.log("Error: " + JSON.stringify(error))
            })
    }

    useEffect(() => {
        // getChildList();
        setIsLoading(true);

        fetch("https://randomuser.me/api/?seed=1&page=1&results=20")
            .then(response => response.json())
            .then(results => {
                setData(results);
                setIsLoading(false);
            })
            .catch(err => {
                setIsLoading(false);
                setError(err);
            });
    }, [])
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Favorite Contacts</Text>
            {isLoading ?
                <Text>...Loading</Text>
                :
                <FlatList
                    data={data}
                    keyExtractor={item => item.first}
                    renderItem={({ item }) => (
                        <View style={styles.listItem}>
                            {/* <Image
                                source={{ uri: item.picture.thumbnail }}
                                style={styles.coverImage}
                            />
                            <View style={styles.metaInfo}>
                                <Text style={styles.title}>{`${item.name.first} ${item.name.last
                                    }`}</Text>
                            </View> */}
                            <Text>hello</Text>
                        </View>
                    )}
                />}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        // flex: 0.5,
        position: 'absolute',
        alignSelf: 'center',
        backgroundColor: '#f8f8f8',
        alignItems: 'center',
        marginTop: 30
    },
    text: {
        fontSize: 20,
        color: '#101010',
        marginTop: 60,
        fontWeight: '700'
    },
    listItem: {
        marginTop: 10,
        padding: 20,
        alignItems: 'center',
        backgroundColor: 'red',
        width: 750
    },
    coverImage: {
        width: 100,
        height: 100,
        borderRadius: 8
    },
    metaInfo: {
        marginLeft: 10
    },
    title: {
        fontSize: 18,
        width: 200,
        padding: 10
    }
});
export default ChildrenListDisplay
