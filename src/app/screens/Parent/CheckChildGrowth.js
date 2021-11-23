import React, { useState, useEffect, useContext } from 'react'
import { View, Text, StyleSheet, Modal, Alert } from 'react-native'
import { Radio, Heading, HStack, Center, Button, Stack, Flex, ScrollView } from 'native-base';
import ChildGrowthSymptoms from './ChildrenInformation/ChildGrowthSymptoms';
import { TextInput } from 'react-native-paper';
import GraphModal from './ChildrenInformation/GraphModal';
import { Rating } from 'react-native-elements';
import ChildGrowthQuestions from '../../../ChildGrowthQuestions';
import { PolioContext } from '../../../../Provider';
import axios from 'axios';
function CheckChildGrowth() {
    const [modalVisible, setModalVisible] = useState(false);
    const closeMenu = () => setModalVisible(false);
    const { childgrowthval, fillChildGrowthValues } = useContext(PolioContext);
    let [childgrowthvalues, setchildgrowthvalues] = useState({
        "age": 3.0,
        "height": 5.0,
        "weight": 5.0, "grossMotor": 5.53, "fineMotor": 2.76, "overActivity": 2.76, "inActivity": 2.76, "communicationSkill": 2.5, "problemSolving": 5, "memory": 2.5,
        "socialSkill": 2.5, "attentionConcentration": 2.0, "direction": 1.0, "visual": 2.0, "spokenSkill": 2.0, "readingWriting": 2.0,
        "emotionalLevel": 1.1,
        "planningOrganization": 1.1,
        "emotionalProblem": 1.1
    })
    const calculateChildGrowth = () => {
        // fillChildGrowthValues(childgrowthvalues)
        if (childgrowthval.age) {
            console.log("ChildGrowthVal: " + JSON.stringify(childgrowthval));
            // axios.post("http://10.0.2.2:5000/getPredictions", childgrowthval).
            //     then(function (response) {
            //         console.log("Response: " + JSON.stringify(response.data.Message))
            //     }).catch(function (error) {
            //         console.log("Error: " + JSON.stringify(error))
            //     })
        } else {
            console.log("NNot parsed")
        }
    }
    // useEffect(() => {
    //     calculateChildGrowth()
    // }, [childgrowthval])
    return (
        <ScrollView>
            <Flex
                direction="column"
                backgroundColor="white"
            >
                <Center style={{
                    marginTop: 30
                }}>
                    <Heading textAlign="center" mb="10" size="xl">
                        Check Child Growth
                    </Heading>
                    {/* <AirbnbRating /> */}
                </Center>
                <Center style={{
                    marginTop: -30
                }}>
                    <ChildGrowthSymptoms symptom="Weight" />
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Height" />
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Age" />
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Gross Motor" />
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Fine Motor" />
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Communication" />
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Emotional Development" />
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Attention and Concentration" />
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Overactivity and Impulsivity" />
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Passivity/ Inactivity" />
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Planning/ Organising" />
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Perception of Directions" />
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Perception of Visual Forms and Figures" />
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Memory" />
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Spoken Language" />
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Reading/Writing" />
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Social Skills" />
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Emotional Problems" />
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Problem Solving" />
                </Center>
                <Center style={{ marginTop: 40, marginBottom: 40 }}>
                    <Button key="lg" size="lg" onPress={() => {
                        // setModalVisible(true);
                        calculateChildGrowth();
                    }}>
                        Generate Report
                    </Button>
                </Center>
                <Modal
                    animationType="slide"
                    visible={modalVisible}
                    // transparent={true}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <GraphModal closeMenu={closeMenu}
                        displayText="Your Child Growth is Normal!"
                    />
                </Modal>
            </Flex>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    modal_style: {
        flex: 1,
        backgroundColor: "white",
        width: "80%",
        marginTop: 50,
        alignSelf: 'center',
        borderWidth: 2,
        borderRadius: 10
    },
    formArea: {
        flex: 1,
        marginTop: 40
    },
    textContainer: {
        textAlign: 'center',
        fontSize: 30
    },
    options: {
        flex: 1,
        flexDirection: 'row'
    }
    // top: {
    //     position: 'relative',
    //     backgroundColor: '#5257f2',
    //     paddingRight: 12.7,
    //     paddingLeft: 12.7,
    //     height: 250
    // },
    // middle: {
    //     width: "100%",
    //     height: "100%",
    //     flex: 1,
    //     position: 'absolute',
    //     zIndex: 2,
    //     backgroundColor: "transparent",
    //     paddingLeft: 26.3,
    //     paddingRight: 26.3
    // },
    // TextContainer: {
    //     color: "#fcfdff",
    //     fontFamily: "GoogleSans-Bold",
    //     fontSize: 24,
    //     marginBottom: 30,
    //     position: "relative",
    //     top: "20%",
    //     alignSelf: 'center'
    // }
})
export default CheckChildGrowth
