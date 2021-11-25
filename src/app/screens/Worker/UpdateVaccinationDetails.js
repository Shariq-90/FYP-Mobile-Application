import React, { useState, useContext } from 'react'
import {
    Title,
    Caption,
    Text
} from "react-native-paper";
import axios from 'axios';
import {
    View, SafeAreaView, Modal, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput,
    Alert
} from 'react-native'
import baseUrl from '../../baseUrl';
import { Input } from 'react-native-elements';
import { Button } from 'native-base';
import { PolioContext } from '../../../../Provider';
function UpdateVaccinationDetails(props) {
    const [modalVisible, setModalVisible] = useState(false);
    const closeModal = () => {
        setModalVisible(false);
    }
    const { UpdateChildlist } = useContext(PolioContext);
    const [otp, setOTP] = useState("");
    const [confirmOTP, setconfirmOTP] = useState("")
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
    const { measles, opv,
        bcg, pentavalent,
        pcv
    } = vacc_details;
    const getOTP = () => {
        axios.get(baseUrl + '/polioworker/otp/' + props.id).then(
            function (response) {
                console.log("Response: " + JSON.stringify(response.data.data.otp))
                setOTP(JSON.stringify(response.data.data.otp));
                setModalVisible(true);
            }
        ).catch(function (error) {
            console.log("Error: " + JSON.stringify(error))
        })
    }
    const updateChildInfo = () => {
        if (otp !== "" && confirmOTP !== "") {
            if (otp === JSON.stringify(confirmOTP)) {
                axios.put(baseUrl + "/polioworker/children/" + props.id,
                    {
                        "vaccination": [
                            {
                                "opv": {
                                    "noOfDoses": parseInt(opv != ""
                                        ? opv : "0"
                                    )
                                },
                                "measles": {
                                    "noOfDoses": parseInt(measles != ""
                                        ? measles : "0"
                                    )
                                },
                                "bcg": {
                                    "noOfDoses": parseInt(bcg != ""
                                        ? bcg : "0"
                                    )
                                },
                                "pentavalent": {
                                    "noOfDoses": parseInt(pentavalent != ""
                                        ? pentavalent : "0"
                                    )
                                },
                                "pcv": {
                                    "noOfDoses": parseInt(pcv != ""
                                        ? pcv : "0"
                                    )
                                }
                            }
                        ]
                    }).then(
                        function (response) {
                            Alert.alert("Update Children", JSON.stringify(response.data.message))
                            setconfirmOTP("");
                            setModalVisible(false);
                        }
                    ).catch(function (error) {
                        console.log("Error: " + JSON.stringify(error))
                    })
            }
            else {
                Alert.alert("OTP", "Please enter the correct OTP!")
            }
        } else {
            console.log("Please re-enter the values!");
        }
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
                        fontSize: 20,
                        marginTop: 5
                    }}>{props.childID}</Text>
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
                            keyboardType='numeric'
                            style={{ textAlign: 'center' }}
                            placeholderTextColor="black"
                            // placeholder='OPV'
                            value={opv}
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
                            keyboardType='numeric'
                            style={{ textAlign: 'center' }}
                            placeholderTextColor="black"
                            value={measles}
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
                            keyboardType='numeric'
                            style={{ textAlign: 'center' }}
                            placeholderTextColor="black"
                            value={bcg}
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
                            keyboardType='numeric'
                            style={{ textAlign: 'center' }}
                            placeholderTextColor="black"
                            value={pentavalent}
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
                            keyboardType='numeric'
                            style={{ textAlign: 'center' }}
                            placeholderTextColor="black"
                            value={pcv}
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
                                    getOTP();
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
                <Modal
                    animationType="slide"
                    visible={modalVisible}
                    // transparent={true}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.otpmodal}>
                        <Text style={styles.OTPText}>Enter the OTP you received: </Text>
                        <View style={{ marginTop: 20 }}>
                            <TextInput
                                value={confirmOTP}
                                keyboardType='numeric'
                                onChangeText={(val) => {
                                    setconfirmOTP(val);
                                }}
                                placeholder="Enter OTP"
                                borderWidth={1}
                                width={200}
                            />
                        </View>
                        <View style={{ width: 200 }}>
                            <View style={styles.buttons}>
                                <Button onPress={updateChildInfo}
                                >
                                    Confirm OTP
                                </Button>
                            </View>
                            <View style={styles.buttons}>
                                <Button onPress={() => {
                                    getOTP();
                                }}>
                                    Resend OTP
                                </Button>
                            </View>
                            <View style={styles.buttons}>
                                <Button onPress={() => {
                                    closeModal()
                                }}>
                                    Hide
                                </Button>
                            </View>
                        </View>
                    </View>
                </Modal>
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    profileImage: {
        overflow: 'hidden',
    },
    OTPText: { fontSize: 20 },
    buttons: { marginTop: 20 },
    otpmodal: {
        flex: 0.5,
        top: '25%',
        justifyContent: 'center',
        width: "80%",
        height: '50%',
        alignItems: 'center',
        // backgroundColor: 'red',
        alignSelf: 'center'
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
