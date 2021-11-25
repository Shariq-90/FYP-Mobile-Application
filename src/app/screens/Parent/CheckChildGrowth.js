import React, { useState, useEffect, useContext } from 'react'
import { View, Text, StyleSheet, Modal, Alert } from 'react-native'
import { Radio, Heading, HStack, Center, Button, Stack, Flex, ScrollView } from 'native-base';
import { TextInput } from 'react-native-paper';
import GraphModal from './ChildrenInformation/GraphModal';
import { Rating } from 'react-native-ratings';
import ChildGrowthQuestions from '../../../ChildGrowthQuestions';
import { PolioContext } from '../../../../Provider';
import axios from 'axios';
import PhysicalTraits from './ChildrenInformation/PhysicalTraits';
import GrossAndFineMotor from './GrossAndFineMotor';
import ChildGrowthOp from './ChildGrowthOp';
import RatingComponent from '../../RatingComponent';


function CheckChildGrowth() {
    const [modalVisible, setModalVisible] = useState(false);
    const closeMenu = () => setModalVisible(false);
    const { childgrowthval, fillChildGrowthValues } = useContext(PolioContext);
    // let [childgrowthvalues, setchildgrowthvalues] = useState({
    //     "age": null,
    //     "height": null,
    //     "weight": null, "grossMotor": null, "fineMotor": null, "overActivity": 2.76, "inActivity": 2.76, "communicationSkill": 2.5, "problemSolving": 5, "memory": 2.5,
    //     "socialSkill": 2.5, "attentionConcentration": 2.0, "direction": 1.0, "visual": 2.0, "spokenSkill": 2.0, "readingWriting": 2.0,
    //     "emotionalLevel": 1.1,
    //     "planningOrganization": 1.1,
    //     "emotionalProblem": 1.1
    // })
    let [childgrowthvalues, setchildgrowthvalues] = useState({
        "age": null,
        "height": null,
        "weight": null, "grossMotor": null, "fineMotor": null, "overActivity": 1.0, "inActivity": 1.0, "communicationSkill": 1.0, "problemSolving": 1.0, "memory": 1.0,
        "socialSkill": 1.0, "attentionConcentration": 1.0, "direction": 1.0, "visual": 1.0, "spokenSkill": 1.0, "readingWriting": 1.0,
        "emotionalLevel": 1.0,
        "planningOrganization": 1.0,
        "emotionalProblem": 1.0
    })
    function setAge(val) {
        setchildgrowthvalues({
            ...childgrowthvalues,
            age: parseFloat(val)
        })
    }
    function setWeight(val) {
        setchildgrowthvalues({
            ...childgrowthvalues,
            weight: parseFloat(val)
        })
    }
    function setHeight(val) {
        setchildgrowthvalues({
            ...childgrowthvalues,
            height: parseFloat(val)
        })
    }


    let [physicalskills, setPhysicalSkills] = useState({
        walking: 1.0,
        jumping: 1.0, running: 1.0
    })
    const calculateGrossMotor = () => {
        let gross =
            parseFloat((physicalskills.walking +
                physicalskills.running + physicalskills.jumping
            ) / 3);
        setchildgrowthvalues({
            ...childgrowthvalues,
            grossMotor: parseInt(gross).toFixed()
        })
    }
    const calculateWalking = (rating) => {
        setPhysicalSkills({
            ...physicalskills,
            walking: parseFloat(rating)
        })
        calculateGrossMotor()
    }
    const calculateJumping = (rating) => {
        setPhysicalSkills({
            ...physicalskills,
            jumping: parseFloat(rating)
        })
        calculateGrossMotor()
    }
    const calculateRunning = (rating) => {
        setPhysicalSkills({
            ...physicalskills,
            running: parseFloat(rating)
        })
        calculateGrossMotor()
    }

    let [extraSkills, setExtraSkills] = useState({
        expressions: 1.0, gesture: 1.0,
        body_language: 1.0
    })
    function calculateFineMotor() {
        let fine =
            parseFloat((extraSkills.expressions +
                extraSkills.gesture + extraSkills.body_language
            )) / 3.0;
        setchildgrowthvalues({
            ...childgrowthvalues,
            fineMotor: parseInt(fine).toFixed()
        })
    }
    function calculateSocialExpressions(rating) {
        setExtraSkills({
            ...extraSkills,
            expressions: parseFloat(rating)
        })
        calculateFineMotor()
    }
    function calculateGestures(rating) {
        setExtraSkills({
            ...extraSkills,
            gesture: parseFloat(rating)
        })
        calculateFineMotor()
    }
    function calculateBodyLanguage(rating) {
        setExtraSkills({
            ...extraSkills,
            body_language: parseFloat(rating)
        })
        calculateFineMotor()
    }
    function calculateCommunication(rating) {

        setchildgrowthvalues({
            ...childgrowthvalues,
            communicationSkill: parseFloat(rating)
        });
        fillChildGrowthValues(childgrowthvalues)
    }
    function calculateEmotionalDevelopment(rating) {

        setchildgrowthvalues({
            ...childgrowthvalues,
            emotionalLevel: parseFloat(rating)
        })
        fillChildGrowthValues(childgrowthvalues)
    }
    function calculateAttention(rating) {

        setchildgrowthvalues({
            ...childgrowthvalues,
            attentionConcentration: parseFloat(rating)
        })
        fillChildGrowthValues(childgrowthvalues)
    }
    function calculateOverActivity(rating) {

        setchildgrowthvalues({
            ...childgrowthvalues,
            overActivity: parseFloat(rating)
        })
        fillChildGrowthValues(childgrowthvalues)
    }
    function calculateInactivity(rating) {

        setchildgrowthvalues({
            ...childgrowthvalues,
            inActivity: parseFloat(rating)
        })
        fillChildGrowthValues(childgrowthvalues)
    }
    function calculatePlanning(rating) {

        setchildgrowthvalues({
            ...childgrowthvalues,
            planningOrganization: parseFloat(rating)
        })
        fillChildGrowthValues(childgrowthvalues)
    }
    function calculateDirection(rating) {

        setchildgrowthvalues({
            ...childgrowthvalues,
            direction: parseFloat(rating)
        })
        fillChildGrowthValues(childgrowthvalues)
    }
    function calculateVisuals(rating) {

        setchildgrowthvalues({
            ...childgrowthvalues,
            visual: parseFloat(rating)
        })
        fillChildGrowthValues(childgrowthvalues)
    }
    function calculateMemory(rating) {

        setchildgrowthvalues({
            ...childgrowthvalues,
            memory: parseFloat(rating)
        })
        fillChildGrowthValues(childgrowthvalues)
    }
    function calculateLanguager(rating) {

        setchildgrowthvalues({
            ...childgrowthvalues,
            spokenSkill: parseFloat(rating)
        })
        fillChildGrowthValues(childgrowthvalues)
    }
    function calculateReadingWriting(rating) {

        setchildgrowthvalues({
            ...childgrowthvalues,
            readingWriting: parseFloat(rating)
        })
        fillChildGrowthValues(childgrowthvalues)
    }
    function calculateSocialSkills(rating) {

        setchildgrowthvalues({
            ...childgrowthvalues,
            socialSkill: parseFloat(rating)
        })
        fillChildGrowthValues(childgrowthvalues)
    }
    function calculateEmotionalProblems(rating) {

        setchildgrowthvalues({
            ...childgrowthvalues,
            emotionalProblem: parseFloat(rating)
        })
        fillChildGrowthValues(childgrowthvalues)
    }
    function calculateProblemSolving(rating) {

        setchildgrowthvalues({
            ...childgrowthvalues,
            problemSolving: parseFloat(rating)
        })
        fillChildGrowthValues(childgrowthvalues)
    }
    const calculateChildGrowth = () => {
        // calculateGrossMotor();
        // calculateFineMotor();
        fillChildGrowthValues(childgrowthvalues);
        // console.log("ChildGrowthVal: " + JSON.stringify(childgrowthval));
        if (childgrowthval) {
            const postValues = {
                "age": childgrowthvalues.age,
                "height": childgrowthvalues.height,
                "weight": childgrowthvalues.weight,
                "grossMotor": 2.5,
                // "grossMotor": parseFloat(childgrowthvalues.grossMotor).toFixed(2),
                // "fineMotor": parseFloat(childgrowthvalues.fineMotor).toFixed(2),
                "fineMotor": 2.5,
                "overActivity": Number(childgrowthvalues.overActivity.toFixed(1)),
                "inActivity": Number(childgrowthvalues.inActivity.toFixed(1)),
                "communicationSkill": Number(childgrowthvalues.communicationSkill.toFixed(1)),
                "problemSolving": Number(childgrowthvalues.problemSolving.toFixed(1)),
                "memory": Number(childgrowthvalues.memory.toFixed(1)),
                "socialSkill": Number(childgrowthvalues.socialSkill.toFixed(1)),
                "attentionConcentration": Number(childgrowthvalues.attentionConcentration.toFixed(1)),
                "direction": Number(childgrowthvalues.direction.toFixed(1)),
                "visual": Number(childgrowthvalues.visual.toFixed(1)),
                "spokenSkill": Number(childgrowthvalues.spokenSkill.toFixed(1)),
                "readingWriting": Number(childgrowthvalues.readingWriting.toFixed(1)),
                "emotionalLevel": Number(childgrowthvalues.emotionalLevel.toFixed(1)),
                "planningOrganization": Number(childgrowthvalues.planningOrganization.toFixed(1)),
                "emotionalProblem": Number(childgrowthvalues.emotionalProblem.toFixed(1))
            }
            console.log("ChildGrowthVal: " + JSON.stringify(postValues));
            axios.post("http://10.0.2.2:5000/getPredictions", postValues
            ).
                then(function (response) {
                    console.log("Response: " + JSON.stringify(response.data.Message))
                }).catch(function (error) {
                    console.log("Error: " + JSON.stringify(error))
                })
        } else {
            console.log("NNot parsed")
        }
    }
    // useEffect(() => {
    //     fillChildGrowthValues(childgrowthvalues)
    // }, [childgrowthvalues])
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
                    marginTop: 0
                }}>
                    <PhysicalTraits symptom="Weight"
                        trait={childgrowthvalues.weight ?
                            JSON.stringify(childgrowthvalues.weight) : ""}
                        setTrait={setWeight}
                    />
                </Center>
                <Center style={{
                    marginTop: 30
                }}>
                    <PhysicalTraits symptom="Height"
                        trait={childgrowthvalues.height ?
                            JSON.stringify(childgrowthvalues.height) : ""}
                        setTrait={setHeight}
                    />
                </Center>
                <Center style={{
                    marginTop: 30
                }}>
                    <PhysicalTraits symptom="Age"
                        trait={childgrowthvalues.age ?
                            JSON.stringify(childgrowthvalues.age) : ""}
                        setTrait={setAge}
                    />
                </Center>
                <Center >
                    <GrossAndFineMotor i={0} j={1} k={2}
                        symptom="Gross Motor"
                    />
                    <View style={{
                        marginTop: 10,
                        flexDirection: 'row',
                    }}>
                        <Heading textAlign="left"
                            size="sm">{ChildGrowthQuestions.
                                find(o => o.key === "Gross Motor").
                                subquestions[0].data}</Heading>
                        <RatingComponent rating={physicalskills.walking}
                            setRating={calculateWalking}
                        />
                    </View>
                    <View style={{
                        marginTop: 10,
                        flexDirection: 'row',
                    }}>
                        <Heading textAlign="left"
                            size="sm">{ChildGrowthQuestions.
                                find(o => o.key === "Gross Motor").
                                subquestions[1].data}</Heading>
                        <RatingComponent rating={physicalskills.jumping}
                            setRating={calculateJumping}
                        />
                    </View>
                    <View style={{
                        marginTop: 10,
                        flexDirection: 'row',
                    }}>
                        <Heading textAlign="left"
                            size="sm">{ChildGrowthQuestions.
                                find(o => o.key === "Gross Motor").
                                subquestions[2].data}</Heading>
                        <RatingComponent rating={physicalskills.running}
                            setRating={calculateRunning}
                        />
                    </View>
                </Center>
                <Center >
                    <GrossAndFineMotor i={0} j={1} k={2}
                        symptom="Fine Motor"
                    />
                    <View style={{
                        marginTop: 10,
                        flexDirection: 'row',
                    }}>
                        <Heading textAlign="left"
                            size="sm">{ChildGrowthQuestions.
                                find(o => o.key === "Fine Motor").
                                subquestions[0].data}</Heading>
                        <RatingComponent rating={extraSkills.expressions}
                            setRating={calculateSocialExpressions}
                        />
                    </View>
                    <View style={{
                        marginTop: 10,
                        flexDirection: 'row',
                    }}>
                        <Heading textAlign="left"
                            size="sm">{ChildGrowthQuestions.
                                find(o => o.key === "Fine Motor").
                                subquestions[1].data}</Heading>
                        <RatingComponent rating={extraSkills.gesture}
                            setRating={calculateGestures}
                        />
                    </View>
                    <View style={{
                        marginTop: 10,
                        flexDirection: 'row',
                    }}>
                        <Heading textAlign="left"
                            size="sm">{ChildGrowthQuestions.
                                find(o => o.key === "Fine Motor").
                                subquestions[2].data}</Heading>
                        <RatingComponent rating={extraSkills.body_language}
                            setRating={calculateBodyLanguage}
                        />
                    </View>
                </Center>
                <Center >
                    <ChildGrowthOp symptom="Communication"
                        rating={childgrowthvalues.communicationSkill}
                        setRating={calculateCommunication}
                    />
                </Center>
                <Center >
                    <ChildGrowthOp symptom="Emotional Development"
                        rating={childgrowthvalues.emotionalLevel}
                        setRating={calculateEmotionalDevelopment}
                    />
                </Center>
                <Center >
                    <ChildGrowthOp symptom="Attention and Concentration"
                        rating={childgrowthvalues.attentionConcentration}
                        setRating={calculateAttention}
                    />
                </Center>
                <Center >
                    <ChildGrowthOp symptom="Overactivity and Impulsivity"
                        rating={childgrowthvalues.overActivity}
                        setRating={calculateOverActivity}
                    />
                </Center>
                <Center >
                    <ChildGrowthOp symptom="Passivity/ Inactivity"
                        rating={childgrowthvalues.inActivity}
                        setRating={calculateInactivity}
                    />
                </Center>
                <Center >
                    <ChildGrowthOp symptom="Planning/ Organising"
                        rating={childgrowthvalues.planningOrganization}
                        setRating={calculatePlanning}
                    />
                </Center>
                <Center >
                    <ChildGrowthOp symptom="Perception of Directions"
                        rating={childgrowthvalues.direction}
                        setRating={calculateDirection}
                    />
                </Center>
                <Center >
                    <ChildGrowthOp symptom="Perception of Visual Forms and Figures"
                        rating={childgrowthvalues.visual}
                        setRating={calculateVisuals}
                    />
                </Center>
                <Center >
                    <ChildGrowthOp symptom="Memory"
                        rating={childgrowthvalues.memory}
                        setRating={calculateMemory}
                    />
                </Center>
                <Center >
                    <ChildGrowthOp symptom="Spoken Language"
                        rating={childgrowthvalues.spokenSkill}
                        setRating={calculateLanguager}
                    />
                </Center>
                <Center >
                    <ChildGrowthOp symptom="Reading/Writing"
                        rating={childgrowthvalues.readingWriting}
                        setRating={calculateReadingWriting}
                    />
                </Center>
                <Center >
                    <ChildGrowthOp symptom="Social Skills"
                        rating={childgrowthvalues.socialSkill}
                        setRating={calculateSocialSkills}
                    />
                </Center>
                <Center >
                    <ChildGrowthOp symptom="Emotional Problems"
                        rating={childgrowthvalues.emotionalProblem}
                        setRating={calculateEmotionalProblems}
                    />
                </Center>
                <Center >
                    <ChildGrowthOp symptom="Problem Solving"
                        rating={childgrowthvalues.problemSolving}
                        setRating={calculateProblemSolving}
                    />
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
