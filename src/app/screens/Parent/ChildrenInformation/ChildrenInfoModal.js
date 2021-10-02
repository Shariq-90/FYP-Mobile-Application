import React from 'react'
import {
    Title,
    Caption,
    Text
} from "react-native-paper";
import ChildDetails from './ChildDetails';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Share from 'react-native-share';
import { View, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
function ChildrenInfoModal(props) {
    return (
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
                }}>{ChildDetails[props.childid].name}</Text>
                <Text style={styles.text, {
                    fontWeight: '200',
                    fontSize: 15,
                    marginTop: 20
                }}>Parent Name: {ChildDetails[props.childid].parentName}</Text>
                <Text style={styles.text, {
                    fontWeight: '200',
                    fontSize: 15
                }}>Parent CNIC: {ChildDetails[props.childid].parentCNIC}</Text>
                <Text style={styles.text, {
                    fontWeight: '200',
                    fontSize: 15
                }}>Contact No: {ChildDetails[props.childid].contactNo}</Text>
                <Text style={styles.text, {
                    fontWeight: '200',
                    fontSize: 15
                }}>Address: {ChildDetails[props.childid].address}</Text>
                <Text style={styles.text, {
                    fontWeight: '200',
                    fontSize: 15
                }}>DOB: {ChildDetails[props.childid].dateOfBirth}</Text>
                <Text style={styles.text, {
                    fontWeight: '200',
                    fontSize: 15
                }}>Gender: {ChildDetails[props.childid].gender}</Text>
                <Text style={styles.text, {
                    fontWeight: '200',
                    fontSize: 15
                }}>BirthPlace: {ChildDetails[props.childid].birthPlace}</Text>
                <Text style={styles.text, {
                    fontWeight: 'bold',
                    fontSize: 20,
                    marginTop: 20
                }}>Vaccination Information</Text>
                <Text style={styles.text, {
                    fontWeight: '200',
                    fontSize: 15
                }}>Diphteria: {ChildDetails[props.childid].vaccination.Diphteria}</Text>
                <Text style={styles.text, {
                    fontWeight: '200',
                    fontSize: 15
                }}>Polio: {ChildDetails[props.childid].vaccination.Polio}</Text>
                <Text style={styles.text, {
                    fontWeight: '200',
                    fontSize: 15
                }}>Homophiles: {ChildDetails[props.childid].vaccination.Homophiles}</Text>
                <Text style={styles.text, {
                    fontWeight: '200',
                    fontSize: 15
                }}>Rota Virus: {ChildDetails[props.childid].vaccination.Rota_Virus}</Text>
                <Text style={styles.text, {
                    fontWeight: '200',
                    fontSize: 15
                }}>Measles: {ChildDetails[props.childid].vaccination.Measles}</Text>
                <Text style={styles.text, {
                    fontWeight: '200',
                    fontSize: 15
                }}>Hepatitus A: {ChildDetails[props.childid].vaccination.Hepatitus_A}</Text>
                <Text style={styles.text, {
                    fontWeight: '200',
                    fontSize: 15
                }}>Hepatitus B: {ChildDetails[props.childid].vaccination.Hepatitus_B}</Text>
                <Text style={styles.text, {
                    fontWeight: '200',
                    fontSize: 15
                }}>Papilloma Virus: {ChildDetails[props.childid].vaccination.Papilloma_Virus}</Text>
                <Text style={styles.text, {
                    fontWeight: '200',
                    fontSize: 15
                }}>Influenza: {ChildDetails[props.childid].vaccination.Influenze}</Text>
                <View style={styles.row, { marginTop: 20, alignSelf: 'center' }}>
                    <TouchableOpacity onPress={props.closeModal}>
                        <Text style={styles.closeButton}>Hide</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    profileImage: {
        overflow: 'hidden',
    },
    container: {
        flex: 1,
        backgroundColor: "white",
        width: "80%",
        marginTop: 50,
        alignSelf: 'center',
        borderWidth: 2,
        borderRadius: 10
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
