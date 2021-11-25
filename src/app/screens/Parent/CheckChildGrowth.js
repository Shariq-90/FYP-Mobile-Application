import React, { useState, useEffect, useContext } from 'react'
import { View, Text, StyleSheet, Modal, Alert } from 'react-native'
import { Radio, Heading, HStack, Center, Button, Stack, Flex, ScrollView } from 'native-base';
import GraphModal from './ChildrenInformation/GraphModal';
import { Rating } from 'react-native-ratings';
import ChildGrowthQuestions from '../../../ChildGrowthQuestions';
import { PolioContext } from '../../../../Provider';
import axios from 'axios';
import PhysicalTraits from './ChildrenInformation/PhysicalTraits';
import GrossAndFineMotor from './GrossAndFineMotor';
import ChildGrowthOp from './ChildGrowthOp';
import RatingComponent from '../../RatingComponent';
import { parse } from 'react-native-svg';


function CheckChildGrowth() {
    const [modalVisible, setModalVisible] = useState(false);
    const closeMenu = () => setModalVisible(false);
    const { childgrowthval, fillChildGrowthValues } = useContext(PolioContext);
    const [mental, setmental] = useState("");
    const [physical, setphysical] = useState("");
    let [childgrowthvalues, setchildgrowthvalues] = useState({
        "age": null,
        "height": null,
        "weight": null, "grossMotor": 1.1, "fineMotor": 1.1,
        "overActivity": 1.1, "inActivity": 1.1, "communicationSkill": 1.1,
        "problemSolving": 1.1, "memory": 1.1,
        "socialSkill": 1.1, "attentionConcentration": 1.1, "direction": 1.1,
        "visual": 1.1, "spokenSkill": 1.1, "readingWriting": 1.1,
        "emotionalLevel": 1.1,
        "planningOrganization": 1.1,
        "emotionalProblem": 1.1
    })
    function setAge(val) {
        // console.log("Age: " + Number(val))
        setchildgrowthvalues({
            ...childgrowthvalues,
            age: val
        })
        // console.log("Age: " + childgrowthvalues.age)
    }
    function setWeight(val) {
        //console.log("Weighr: " + parseFloat(val))
        setchildgrowthvalues({
            ...childgrowthvalues,
            weight: val
        })
        // console.log("we: " + childgrowthvalues.weight)
    }
    function setHeight(val) {
        console.log("H: " + Number(val))
        setchildgrowthvalues({
            ...childgrowthvalues,
            height: val
        })
        // console.log("he: " + childgrowthvalues.height)
    }



    let [physicalskills, setPhysicalSkills] = useState({
        walking: 1.1,
        jumping: 1.1, running: 1.1
    })
    const calculateGrossMotor = () => {
        //console.log("W: " + physicalskills.walking);
        //console.log("R: " + physicalskills.running);
        //console.log("J: " + physicalskills.jumping);
        let gross =
            (physicalskills.walking +
                physicalskills.running + physicalskills.jumping)
            / 3;
        // console.log("Gross: " + gross);
        setchildgrowthvalues({
            ...childgrowthvalues,
            grossMotor: gross.toFixed(2)
        })
    }
    const calculateWalking = (rating) => {
        setPhysicalSkills({
            ...physicalskills,
            walking: rating
        })
        calculateGrossMotor()
    }
    const calculateJumping = (rating) => {
        setPhysicalSkills({
            ...physicalskills,
            jumping: rating
        })
        calculateGrossMotor()
    }
    const calculateRunning = (rating) => {
        setPhysicalSkills({
            ...physicalskills,
            running: rating
        })
        calculateGrossMotor()
    }

    let [extraSkills, setExtraSkills] = useState({
        expressions: 1.1, gesture: 1.1,
        body_language: 1.1
    })
    function calculateFineMotor() {
        let fine =
            (extraSkills.expressions +
                extraSkills.gesture + extraSkills.body_language
            ) / 3.0;
        setchildgrowthvalues({
            ...childgrowthvalues,
            fineMotor: fine.toFixed(2)
        })
    }
    function calculateSocialExpressions(rating) {
        setExtraSkills({
            ...extraSkills,
            expressions: rating
        })
        calculateFineMotor()
    }
    function calculateGestures(rating) {
        setExtraSkills({
            ...extraSkills,
            gesture: rating
        })
        calculateFineMotor()
    }
    function calculateBodyLanguage(rating) {
        setExtraSkills({
            ...extraSkills,
            body_language: rating
        })
        calculateFineMotor()
    }
    function calculateCommunication(rating) {

        setchildgrowthvalues({
            ...childgrowthvalues,
            communicationSkill: rating
        });
        fillChildGrowthValues(childgrowthvalues)
    }
    function calculateEmotionalDevelopment(rating) {

        setchildgrowthvalues({
            ...childgrowthvalues,
            emotionalLevel: rating
        })
        fillChildGrowthValues(childgrowthvalues)
    }
    function calculateAttention(rating) {

        setchildgrowthvalues({
            ...childgrowthvalues,
            attentionConcentration: rating
        })
        fillChildGrowthValues(childgrowthvalues)
    }
    function calculateOverActivity(rating) {

        setchildgrowthvalues({
            ...childgrowthvalues,
            overActivity: rating
        })
        fillChildGrowthValues(childgrowthvalues)
    }
    function calculateInactivity(rating) {

        setchildgrowthvalues({
            ...childgrowthvalues,
            inActivity: rating
        })
        fillChildGrowthValues(childgrowthvalues)
    }
    function calculatePlanning(rating) {

        setchildgrowthvalues({
            ...childgrowthvalues,
            planningOrganization: rating
        })
        fillChildGrowthValues(childgrowthvalues)
    }
    function calculateDirection(rating) {

        setchildgrowthvalues({
            ...childgrowthvalues,
            direction: rating
        })
        fillChildGrowthValues(childgrowthvalues)
    }
    function calculateVisuals(rating) {

        setchildgrowthvalues({
            ...childgrowthvalues,
            visual: rating
        })
        fillChildGrowthValues(childgrowthvalues)
    }
    function calculateMemory(rating) {

        setchildgrowthvalues({
            ...childgrowthvalues,
            memory: rating
        })
        fillChildGrowthValues(childgrowthvalues)
    }
    function calculateLanguager(rating) {

        setchildgrowthvalues({
            ...childgrowthvalues,
            spokenSkill: rating
        })
        fillChildGrowthValues(childgrowthvalues)
    }
    function calculateReadingWriting(rating) {

        setchildgrowthvalues({
            ...childgrowthvalues,
            readingWriting: rating
        })
        fillChildGrowthValues(childgrowthvalues)
    }
    function calculateSocialSkills(rating) {

        setchildgrowthvalues({
            ...childgrowthvalues,
            socialSkill: rating
        })
        fillChildGrowthValues(childgrowthvalues)
    }
    function calculateEmotionalProblems(rating) {

        setchildgrowthvalues({
            ...childgrowthvalues,
            emotionalProblem: rating
        })
        fillChildGrowthValues(childgrowthvalues)
    }
    function calculateProblemSolving(rating) {

        setchildgrowthvalues({
            ...childgrowthvalues,
            problemSolving: rating
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
                "age": Number(childgrowthvalues.age),
                "height": Number(childgrowthvalues.height),
                "weight": Number(childgrowthvalues.weight),
                "grossMotor": Number(childgrowthvalues.grossMotor),
                "fineMotor": Number(childgrowthvalues.fineMotor),
                "overActivity": Number(childgrowthvalues.overActivity),
                "inActivity": Number(childgrowthvalues.inActivity),
                "communicationSkill": Number(childgrowthvalues.communicationSkill),
                "problemSolving": Number(childgrowthvalues.problemSolving),
                "memory": Number(childgrowthvalues.memory),
                "socialSkill": Number(childgrowthvalues.socialSkill),
                "attentionConcentration": Number(childgrowthvalues.attentionConcentration),
                "direction": Number(childgrowthvalues.direction),
                "visual": Number(childgrowthvalues.visual),
                "spokenSkill": Number(childgrowthvalues.spokenSkill),
                "readingWriting": Number(childgrowthvalues.readingWriting),
                "emotionalLevel": Number(childgrowthvalues.emotionalLevel),
                "planningOrganization": Number(childgrowthvalues.planningOrganization),
                "emotionalProblem": Number(childgrowthvalues.emotionalProblem)
            }
            //console.log("ChildGrowthVal: " + JSON.stringify(postValues));
            axios.post("http://10.0.2.2:5000/getPredictions", postValues
            ).
                then(function (response) {
                    let score = JSON.stringify(response.data.Message)
                    let mental_score = parseFloat(score.substring(18,
                        score.search("]")
                    ))
                    let parse_physical_score = score.substring(score.search("Physical"))
                        ;
                    let physical_score = parseFloat(parse_physical_score
                        .substring(
                            parse_physical_score.indexOf("[") + 1, parse_physical_score.indexOf("]")))
                    console.log("Mental and Physical: " +
                        mental_score + ", " + physical_score
                    )
                    // if ((mental_score >= 0 && mental_score < 15)
                    //     && (physical_score >= 0 && physical_score < 15)
                    // ) {
                    //     setphysical("Your Child Growth is under Normal")
                    //     setmental("Your Child Growth is under Under Normal")
                    // }
                    // else if ((mental_score >= 15 && mental_score < 40)
                    //     && (physical_score >= 15 && physical_score < 40)
                    // ) {
                    //     setphysical("Your Child Growth is  Normal")
                    //     setmental("Your Child Growth is Normal")
                    // }
                    // else if ((mental_score >= 40 && mental_score < 50)
                    //     && (physical_score >= 40 && physical_score < 50)
                    // ) {
                    //     setphysical("Your Child Growth is Over Normal")
                    //     setmental("Your Child Growth is Over Normal")
                    // }
                    // else{
                    //     console.log("Dasdadasa")
                    // }
                    // setModalVisible(true);
                }).catch(function (error) {
                    console.log("Error: " + JSON.stringify(error))
                })
        } else {
            console.log("Not parsed")
        }
    }
    useEffect(() => {
        calculateGrossMotor();
        calculateFineMotor();
        fillChildGrowthValues(childgrowthvalues)
    }, [physicalskills, extraSkills])
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
                            childgrowthvalues.weight : ""}
                        setTrait={setWeight}
                    />
                </Center>
                <Center style={{
                    marginTop: 30
                }}>
                    <PhysicalTraits symptom="Height"
                        trait={childgrowthvalues.height ?
                            childgrowthvalues.height : ""}
                        setTrait={setHeight}
                    />
                </Center>
                <Center style={{
                    marginTop: 30
                }}>
                    <PhysicalTraits symptom="Age"
                        trait={childgrowthvalues.age ?
                            childgrowthvalues.age : ""}
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
                        displayText={mental}
                        displayTextPhysical={physical}
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
