import React, { useState } from 'react'
import {
    Title,
    Caption,
    Text
} from "react-native-paper";

// import Share from 'react-native-share';
import { View, ScrollView, Modal, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Button } from 'native-base';
import ShowVaccinationSchedule from '../ShowVaccinationSchedule';
import axios from 'axios';
function ChildrenInfoModal(props) {
    const [modalVisible, setModalVisible] = useState(false);
    const returnBoldText = (value) => {
        return (
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{value}</Text>
        )
    }
    const closeMenu = () => setModalVisible(false);
    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>

                <View style={{ alignSelf: 'center', top: -55 }}>
                    <View style={styles.profileImage}>
                        <Image source={require('../../../assets/children.png')}
                            style={styles.image}
                            resizeMode="center"
                        />
                    </View>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.text, {
                        fontWeight: 'bold',
                        fontSize: 20
                    }}>{props.childrens.childrens.childID}</Text>
                    <View style={{
                        alignItems: 'flex-start',
                        textAlign: 'left'
                    }}>
                        <Text style={styles.text, {
                            fontWeight: '200',
                            fontSize: 18,
                            marginTop: 20,
                            width: 270
                        }}>{returnBoldText("Parent Name: ")} {props.childrens.childrens.parentName}</Text>
                        <Text style={styles.text, {
                            fontWeight: '200',
                            fontSize: 18
                        }}>{returnBoldText("Parent CNIC: ")} {props.childrens.childrens.parentCNIC}</Text>
                        <Text style={styles.text, {
                            fontWeight: '200',
                            fontSize: 18
                        }}>{returnBoldText("Contact No: ")} {props.childrens.childrens.contactNo}</Text>
                        <Text style={styles.text, {
                            fontWeight: '200',
                            fontSize: 18
                        }}>{returnBoldText("Address: ")}{props.childrens.childrens.address.addr + ", "
                            + props.childrens.childrens.address.area + ", " + props.childrens.childrens.address.city}</Text>
                        <Text style={styles.text, {
                            fontWeight: '200',
                            fontSize: 18
                        }}>{returnBoldText("DOB: ")} {props.childrens.childrens.dateOfBirth}</Text>
                        <Text style={styles.text, {
                            fontWeight: '200',
                            fontSize: 18
                        }}>{returnBoldText("Gender: ")}{props.childrens.childrens.gender}</Text>
                        <Text style={styles.text, {
                            fontWeight: '200',
                            fontSize: 18
                        }}>{returnBoldText("BirthPlace: ")} {props.childrens.childrens.birthPlace}</Text>
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
                        <Text style={styles.text, {
                            fontWeight: '200',
                            fontSize: 18,
                            textAlign: 'left',
                            width: 270
                        }}>{returnBoldText("OPV: ")} {props.childrens.childrens.vaccination[0].opv.noOfDoses}</Text>
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
                        }}>{returnBoldText("Pentavalent: ")} {props.childrens.childrens.vaccination[0].pentavalent.noOfDoses}</Text>
                        <Text style={styles.text, {
                            fontWeight: '200',
                            fontSize: 18
                        }}>{returnBoldText("PCV: ")} {props.childrens.childrens.vaccination[0].pcv.noOfDoses}</Text>
                    </View>
                    <View style={styles.row, { marginTop: 20, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={props.closeModal}
                        >
                            <View>
                                <Button
                                    width={200}
                                    size="lg" onPress={props.closeModal}>
                                    Hide
                                </Button>
                            </View>
                            <View style={styles.schedule}>
                                <Button
                                    width={220}
                                    size="lg" onPress={() => {
                                        setModalVisible(true)
                                    }}
                                    style={{
                                        textAlign: 'center'
                                    }}
                                >
                                    Show Vaccination Schedule
                                </Button>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <Modal
                    animationType="slide"
                    visible={modalVisible}
                    // transparent={true}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <ShowVaccinationSchedule 
                        closeMenu={closeMenu}
                        child_id = {props.childrens.childrens._id}
                    />
                </Modal>
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    schedule: {
        marginTop: 20
    },
    profileImage: {
        overflow: 'hidden',
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
export default ChildrenInfoModal
