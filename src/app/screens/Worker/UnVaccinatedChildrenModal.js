import React from 'react'
import {
    Title,
    Caption,
    Text
} from "react-native-paper";
// import Share from 'react-native-share';
import { View, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Button } from 'native-base';
import ChildDetails from '../Parent/ChildrenInformation/ChildDetails';
function UnVaccinatedChildrenModal(props) {
    const returnBoldText = (value) => {
        return (
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{value}</Text>
        )
    }
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
                        fontSize: 20
                    }}>{ChildDetails[props.childid].name}</Text>
                    <View style={{
                        alignItems: 'flex-start',
                        textAlign: 'left'
                    }}>
                        <Text style={styles.text, {
                            fontWeight: '200',
                            fontSize: 18,
                            marginTop: 20,
                            width: 270
                        }}>{returnBoldText("Parent Name: ")} {ChildDetails[props.childid].parentName}</Text>
                        <Text style={styles.text, {
                            fontWeight: '200',
                            fontSize: 18
                        }}>{returnBoldText("Parent CNIC: ")} {ChildDetails[props.childid].parentCNIC}</Text>
                        <Text style={styles.text, {
                            fontWeight: '200',
                            fontSize: 18
                        }}>{returnBoldText("Contact No: ")} {ChildDetails[props.childid].contactNo}</Text>
                        <Text style={styles.text, {
                            fontWeight: '200',
                            fontSize: 18
                        }}>{returnBoldText("Address: ")}{ChildDetails[props.childid].address}</Text>
                        <Text style={styles.text, {
                            fontWeight: '200',
                            fontSize: 18
                        }}>{returnBoldText("DOB: ")} {ChildDetails[props.childid].dateOfBirth}</Text>
                        <Text style={styles.text, {
                            fontWeight: '200',
                            fontSize: 18
                        }}>{returnBoldText("Gender: ")}{ChildDetails[props.childid].gender}</Text>
                        <Text style={styles.text, {
                            fontWeight: '200',
                            fontSize: 18
                        }}>{returnBoldText("BirthPlace: ")} {ChildDetails[props.childid].birthPlace}</Text>
                    </View>
                    <Text style={styles.text, {
                        fontWeight: 'bold',
                        fontSize: 25,
                        marginTop: 20
                    }}>Vaccination Information</Text>
                    <View style={{
                        marginTop: 20,
                        alignItems: 'flex-start'
                    }}>
                        {/* {returnBoldText("OPV: ")} {props.childrens.childrens.vaccination[0].opv.noOfDoses}</Text>
                        <Text style={[styles.text, {
                            fontWeight: '200',
                            fontSize: 18,
                            textAlign: 'left'
                        }]}>{returnBoldText("Measles: ")} {props.childrens.childrens.vaccination[0].measles.noOfDoses}</Text>
                        <Text style={styles.text, {
                            fontWeight: '200',
                            fontSize: 18
                        }}>{returnBoldText("BCG: ")} {props.childrens.childrens.vaccination[0].bcg.noOfDoses}</Text>
                        <Text style={styles.text, {
                            fontWeight: '200',
                            fontSize: 18
                        }}>{returnBoldText("Pentavalent: ")} */}
                        {/* <Text style={styles.text, {
                            fontWeight: '200',
                            fontSize: 18,
                            textAlign: 'left',
                            width: 270
                        }}>{returnBoldText("OPV: ")} {ChildDetails[props.childid].vaccination.Diphteria}</Text>
                        <Text style={[styles.text, {
                            fontWeight: '200',
                            fontSize: 18,
                            textAlign: 'left'
                        }]}>{returnBoldText("Measles: ")} {ChildDetails[props.childid].vaccination.Polio}</Text>
                        <Text style={styles.text, {
                            fontWeight: '200',
                            fontSize: 18
                        }}>{returnBoldText("BCG: ")} {ChildDetails[props.childid].vaccination.Homophiles}</Text>
                        <Text style={styles.text, {
                            fontWeight: '200',
                            fontSize: 18
                        }}>{returnBoldText("Pentavalent: ")} {ChildDetails[props.childid].vaccination.Rota_Virus}</Text> */}
                        <Text style={styles.text, {
                            fontWeight: '200',
                            fontSize: 18,
                            textAlign: 'left',
                            width: 270
                        }}>{returnBoldText("Vaccine Allocated: ")} 100</Text>
                        <Text style={styles.text, {
                            fontWeight: '200',
                            fontSize: 18,
                            textAlign: 'left',
                            width: 270
                        }}>{returnBoldText("Vaccine Used: ")} 60</Text>
                        <Text style={styles.text, {
                            fontWeight: '200',
                            fontSize: 18,
                            textAlign: 'left',
                            width: 270
                        }}>{returnBoldText("Vaccine Remainning: ")} 40</Text>
                    </View>
                    <View style={styles.row, { marginTop: 20, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={props.closeModal}
                        >
                            <View style = {styles.hideButton}>
                                <Button
                                    width={200}
                                    size="lg" onPress={props.closeModal}>
                                    Send Report
                                </Button>
                            </View>
                            <View style = {styles.hideButton}>
                                <Button
                                    width={200}
                                    size="lg" onPress={props.closeModal}>
                                    Hide
                                </Button>
                            </View>
                        </TouchableOpacity>
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
    hideButton:{
        marginTop: 20
    },
    text: {
        textAlign: 'left'
    },
    container: {
        flex: 1,
        backgroundColor: "white",
        width: "100%",
        alignSelf: 'center',
        borderWidth: 2,
        marginTop: 50
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
        fontWeight: 'bold'
    }
})
export default UnVaccinatedChildrenModal