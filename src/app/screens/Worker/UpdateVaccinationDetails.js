import React, { useState, useEffect } from 'react'
import {
    Title,
    Caption,
    Text
} from "react-native-paper";
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Share from 'react-native-share';
import { View, SafeAreaView, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import ChildDetails from '../Parent/ChildrenInformation/ChildDetails';
import { Input } from 'react-native-elements';
import { Button } from 'native-base';
function UpdateVaccinationDetails(props) {
    const [vacc_details, setVaccDetails] = useState({
        measles:
            JSON.stringify(props.childrens[0].find(o => o.childID === props.childID).vaccination[0].
                measles.noOfDoses),
        opv:
            JSON.stringify(props.childrens[0].find(o => o.childID === props.childID).vaccination[0].
                opv.noOfDoses),
        bcg:
            // ChildDetails[props.childid].vaccination.Homophiles,
            JSON.stringify(props.childrens[0].find(o => o.childID === props.childID).vaccination[0].
                bcg.noOfDoses),
        pentavalent:
            // ChildDetails[props.childid].vaccination.Rota_Virus,
            JSON.stringify(props.childrens[0].find(o => o.childID === props.childID).vaccination[0].
                pentavalent.noOfDoses),
        pcv:
            // ChildDetails[props.childid].vaccination.Measles,
            JSON.stringify(props.childrens[0].find(o => o.childID === props.childID).vaccination[0].
                pcv.noOfDoses)

    })

// const updateChildInfo = ()=>{
//     axios.get(baseUrl)
// }

    const { measles, opv,
        bcg, pentavalent,
        pcv
    } = vacc_details;
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
                            label="OPV"
                            labelStyle={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                color: 'green',
                                fontSize: 18
                            }}
                            style={{ textAlign: 'center' }}
                            placeholderTextColor="black"
                            // placeholder='OPV'
                            value={opv != "" ? opv : "0"}
                            onChangeText={(text) => {
                                setVaccDetails({
                                    ...vacc_details,
                                    opv: text
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
                            value={measles != "" ? measles : "0"}
                            onChangeText={(text) => {
                                setVaccDetails({
                                    ...vacc_details,
                                    measles: text
                                })
                            }}
                        />
                        <Input
                            label='BCG'
                            labelStyle={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                color: 'green',
                                fontSize: 18
                            }}
                            style={{ textAlign: 'center' }}
                            placeholderTextColor="black"
                            value={bcg != "" ? bcg : "0"}
                            onChangeText={(text) => {
                                setVaccDetails({
                                    ...vacc_details,
                                    bcg: text
                                })
                            }}
                        />
                        <Input
                            label='Pentavalent'
                            labelStyle={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                color: 'green',
                                fontSize: 18
                            }}
                            style={{ textAlign: 'center' }}
                            placeholderTextColor="black"
                            value={pentavalent != "" ? pentavalent : "0"}
                            onChangeText={(text) => {
                                setVaccDetails({
                                    ...vacc_details,
                                    pentavalent: text
                                })
                            }}
                        />
                        <Input
                            label='PCV'
                            labelStyle={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                color: 'green',
                                fontSize: 18
                            }}
                            style={{ textAlign: 'center' }}
                            placeholderTextColor="black"
                            value={pcv != "" ? pcv : "0"}
                            onChangeText={(text) => {
                                setVaccDetails({
                                    ...vacc_details,
                                    pcv: text
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
