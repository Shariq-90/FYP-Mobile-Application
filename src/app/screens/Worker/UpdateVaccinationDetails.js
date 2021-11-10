import React, { useState, useEffect } from 'react'
import {
    Title,
    Caption,
    Text
} from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Share from 'react-native-share';
import { View, SafeAreaView, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import ChildDetails from '../Parent/ChildrenInformation/ChildDetails';
import { Input } from 'react-native-elements';
import { Button } from 'native-base';
function UpdateVaccinationDetails(props) {
    const [vacc_details, setVaccDetails] = useState({
        Diphteria:
            ChildDetails[props.childid].vaccination.Diphteria,
        Polio:
            ChildDetails[props.childid].vaccination.Polio,
        Homophiles:
            ChildDetails[props.childid].vaccination.Homophiles,
        Rota_Virus:
            ChildDetails[props.childid].vaccination.Rota_Virus,
        Measles:
            ChildDetails[props.childid].vaccination.Measles,
        Hepatitus_A:
            ChildDetails[props.childid].vaccination.Hepatitus_A,
        Hepatitus_B:
            ChildDetails[props.childid].vaccination.Hepatitus_B,
        Papilloma_Virus:
            ChildDetails[props.childid].vaccination.Papilloma_Virus,
        Influenze:
            ChildDetails[props.childid].vaccination.Influenze,

    })

    
    const { Diphteria, Polio,
        Homophiles, Rota_Virus,
        Measles, Hepatitus_A,
        Hepatitus_B,
        Papilloma_Virus,
        Influenze
    } = vacc_details;
    // const updateValues = () => {
    //     ChildDetails[props.childid].vaccination.Diphteria = Diphteria;
    //     ChildDetails[props.childid].vaccination.Polio = Polio;
    //     ChildDetails[props.childid].vaccination.Measles = Measles;
    //     ChildDetails[props.childid].vaccination.Hepatitus_A = Hepatitus_A;
    //     ChildDetails[props.childid].vaccination.Hepatitus_B = Hepatitus_B;
    //     ChildDetails[props.childid].vaccination.Papilloma_Virus = Papilloma_Virus;
    //     ChildDetails[props.childid].vaccination.Influenze = Influenze;
    //     ChildDetails[props.childid].vaccination.Rota_Virus =Rota_Virus;
    //     ChildDetails[props.childid].vaccination.Homophiles =Homophiles;
    // }
    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>

                <View style={{ alignSelf: 'center', top: -55 }}>
                    <View style={styles.profileImage}>
                        <Image source={require('../../assets/children.png')}
                            style={styles.image}
                            resizeMode="center"
                        />
                    </View>
                </View>
                <View style={styles.infoContainer}>

                    <Text style={styles.text, {
                        fontWeight: 'bold',
                        fontSize: 20,
                        marginTop: 20
                    }}>Vaccination Information (Doses)</Text>
                    <View style={styles.updateform}>
                        <Input
                            label="Diaphteria"
                            labelStyle={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                color: 'green',
                                fontSize: 18
                            }}
                            style={{ textAlign: 'center' }}
                            placeholderTextColor="black"
                            placeholder='Diphteria'
                            value={Diphteria}
                            onChangeText={(text) => {
                                setVaccDetails({
                                    ...vacc_details,
                                    Diphteria: text
                                })
                            }}
                        />
                        <Input
                            label='Polio'
                            labelStyle={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                color: 'green',
                                fontSize: 18
                            }}
                            style={{ textAlign: 'center' }}
                            placeholderTextColor="black"
                            value={Polio}
                            onChangeText={(text) => {
                                setVaccDetails({
                                    ...vacc_details,
                                    Polio: text
                                })
                            }}
                        />
                        <Input
                            label='Rota Virus'
                            labelStyle={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                color: 'green',
                                fontSize: 18
                            }}
                            style={{ textAlign: 'center' }}
                            placeholderTextColor="black"
                            value={Rota_Virus}
                            onChangeText={(text) => {
                                setVaccDetails({
                                    ...vacc_details,
                                    Rota_Virus: text
                                })
                            }}
                        />
                        <Input
                            label='Measles'
                            labelStyle={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                color: 'green',
                                fontSize: 18
                            }}
                            style={{ textAlign: 'center' }}
                            placeholderTextColor="black"
                            value={Measles}
                            onChangeText={(text) => {
                                setVaccDetails({
                                    ...vacc_details,
                                    Measles: text
                                })
                            }}
                        />
                        <Input
                            label='Hepatitis A'
                            labelStyle={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                color: 'green',
                                fontSize: 18
                            }}
                            style={{ textAlign: 'center' }}
                            placeholderTextColor="black"
                            value={Hepatitus_A}
                            onChangeText={(text) => {
                                setVaccDetails({
                                    ...vacc_details,
                                    Hepatitus_A: text
                                })
                            }}
                        />
                        <Input
                            label='Hepatitis B'
                            labelStyle={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                color: 'green',
                                fontSize: 18
                            }}
                            style={{ textAlign: 'center' }}
                            placeholderTextColor="black"
                            value={Hepatitus_B}
                            onChangeText={(text) => {
                                setVaccDetails({
                                    ...vacc_details,
                                    Hepatitus_B: text
                                })
                            }}
                        />
                        <Input
                            label='Papilloma Virus'
                            value={Papilloma_Virus}
                            labelStyle={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                color: 'green',
                                fontSize: 18
                            }}
                            style={{ textAlign: 'center' }}
                            placeholderTextColor="black"
                            onChangeText={(text) => {
                                setVaccDetails({
                                    ...vacc_details,
                                    Papilloma_Virus: text
                                })
                            }}
                        />
                        <Input
                            label='Influenza'
                            value={Influenze}
                            labelStyle={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                color: 'green',
                                fontSize: 18
                            }}
                            style={{ textAlign: 'center' }}
                            placeholderTextColor="black"
                            onChangeText={(text) => {
                                setVaccDetails({
                                    ...vacc_details,
                                    Influenze: text
                                })
                            }}
                        />
                    </View>

                    <View style={styles.row, { marginTop: 20, alignSelf: 'center' }}>
                        <View>
                            <Button size="lg"
                                width={200}
                                onPress={() => {
                                    // updateValues();
                                }}>
                                Update
                            </Button>
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <Button size="lg" onPress={props.closeModal}>
                                Hide
                            </Button>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    profileImage: {
        overflow: 'hidden',
    },
    container: {
        flex: 1,
        backgroundColor: "white",
        width: "100%",
        alignSelf: 'center',
        borderWidth: 2,
    },
    updateform: {
        marginTop: 20,
        flex: 1,
        justifyContent: 'center',
        width: "70%",
        alignItems: 'center',
        alignSelf: 'center',
    },
    infoContainer: {
        alignItems: 'center',
        top: -110,
        // justifyContent: 'center',
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        width: '80%',
        height: 700,

    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginTop: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    closeButton: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
export default UpdateVaccinationDetails
