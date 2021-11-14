import React, { useEffect, useState } from 'react'
import {
    ScrollView,
    Text, View,
    TouchableOpacity,
    ImageBackground,
    StyleSheet
} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TextInput, Alert } from 'react-native';
import axios from 'axios';
import baseUrl from '../../baseUrl';


function EditProfileScreen() {
    const [parentDetail, setParentDetails] = useState({
        name: null, email: null, password: null, cnic: null, address: null,
        phoneNo: null, area: null, city: null
    });
    const getParentInfo = () => {
        axios.get(baseUrl + '/users/current').then(function (response) {
            console.log("hello");
            setParentDetails({
                name: response.data.data.user.name,
                email: response.data.data.user.email,
                cnic: response.data.data.user.cnic,
                phoneNo: response.data.data.user.phoneNo,
                password: response.data.data.user.password,
                address: response.data.data.user.address.addr ,
                area: response.data.data.user.address.area,
                city: response.data.data.user.address.city
            })
        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    useEffect(() => {
        getParentInfo();
    }, [])

    return (
        <ScrollView style={{
            backgroundColor: "#e6f7fc"
        }}>
            <View style={styles.container}>
                <View style={{ margin: 20 }}>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => { }} >
                            <View style={{
                                height: 100,
                                width: 100,
                                borderRadius: 15,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <ImageBackground
                                    source={require('../../assets/Avatar.jpg')}
                                    style={{ height: 100, width: 100 }}
                                    imageStyle={{ borderRadius: 15 }}
                                >
                                </ImageBackground>
                            </View>
                        </TouchableOpacity>
                        <Text style={{
                            marginTop: 10, fontSize: 25,
                            fontWeight: 'bold'
                        }}>
                            {parentDetail.name ?
                                parentDetail.name : "Usama"
                            }
                        </Text>
                    </View>
                    <View style={styles.action}>
                        <FontAwesome name="user-o" size={20} style={{
                            marginTop: 2
                        }} />
                        <TextInput
                            placeholder={"Name"}
                            placeholderTextColor="#666666"
                            autoCorrect={false}
                            style={styles.textInput}
                            value={parentDetail.name ?
                                parentDetail.name : ""}
                        />
                    </View>
                    <View style={styles.action}>
                        <FontAwesome name="at" size={20} style={{
                            marginTop: 2
                        }} />
                        <TextInput
                            placeholder="Email"
                            placeholderTextColor="#666666"
                            autoCorrect={false}
                            keyboardType='email-address'
                            style={styles.textInput}
                            value={parentDetail.email ?
                                parentDetail.email : ""}
                        />
                    </View>
                    <View style={styles.action}>
                        <FontAwesome name="user-secret" size={20} style={{
                            marginTop: 2
                        }} />
                        <TextInput
                            placeholder="Password"
                            placeholderTextColor="#666666"
                            autoCorrect={false}
                            style={styles.textInput}
                            secureTextEntry={true}
                            value={parentDetail.password ?
                                parentDetail.password : ""}
                        />
                    </View>
                    <View style={styles.action}>
                        <FontAwesome name="id-card" size={20} style={{
                            marginTop: 2
                        }} />
                        <TextInput
                            placeholder="CNIC"
                            placeholderTextColor="#666666"
                            keyboardType='number-pad'
                            editable={false} selectTextOnFocus={false} 
                            autoCorrect={false}
                            style={styles.textInput}
                            value={parentDetail.cnic ?
                                parentDetail.cnic : ""}
                        />
                    </View>
                    <View style={styles.action}>
                        <FontAwesome name="phone" size={20} style={{
                            marginTop: 2
                        }} />
                        <TextInput
                            placeholder="Phone Number"
                            placeholderTextColor="#666666"
                            autoCorrect={false}
                            keyboardType='number-pad'
                            style={styles.textInput}
                            value={parentDetail.phoneNo ?
                                parentDetail.phoneNo : ""}
                        />
                    </View>
                    <View style={styles.action}>
                        <FontAwesome name="address-book" size={20} style={{
                            marginTop: 2
                        }} />
                        <TextInput
                            placeholder="Address"
                            placeholderTextColor="#666666"
                            autoCorrect={false}
                            style={styles.textInput}
                            value={parentDetail.address ?
                                parentDetail.address : ""}
                        />
                    </View>
                    <View style={styles.action}>
                        <FontAwesome name="location" size={20} style={{
                            marginTop: 2
                        }} />
                        <TextInput
                            placeholder="Area"
                            placeholderTextColor="#666666"
                            autoCorrect={false}
                            style={styles.textInput}
                            value={parentDetail.area ?
                                parentDetail.area : ""}
                        />
                    </View>
                    <View style={styles.action}>
                        <FontAwesome name="map-pin" size={20} style={{
                            marginTop: 2
                        }} />
                        <TextInput
                            placeholder="City"
                            placeholderTextColor="#666666"
                            autoCorrect={false}
                            style={styles.textInput}
                            value={parentDetail.city ?
                                parentDetail.city : ""}
                        />
                    </View>

                    <TouchableOpacity style={styles.commandButton}>
                        <Text style={styles.panelButtonTitle}>Update</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#0Cb8B6',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
        color: 'black'
    },
    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        // shadowColor: '#000000',
        // shadowOffset: {width: 0, height: 0},
        // shadowRadius: 5,
        // shadowOpacity: 0.4,
    },
    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: { width: -1, height: -3 },
        shadowRadius: 2,
        shadowOpacity: 0.4,
        // elevation: 5,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },
    panelTitle: {
        fontSize: 27,
        height: 35,
    },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
    },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginVertical: 7,
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: 'black',
    },
});

export default EditProfileScreen
