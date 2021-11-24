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
    let [childgrowthvalues, setchildgrowthvalues] = useState({
        "age": null,
        "height": null,
        "weight": null, "grossMotor": 0.0, "fineMotor": 0.0,
        "overActivity": 2.76, "inActivity": 2.76, "communicationSkill": 2.5,
        "problemSolving": 5, "memory": 2.5,
        "socialSkill": 2.5, "attentionConcentration": 2.0, "direction": 1.0, "visual": 2.0, "spokenSkill": 2.0, "readingWriting": 2.0,
        "emotionalLevel": 1.1,
        "planningOrganization": 1.1,
        "emotionalProblem": 1.1
    })
    // let [childgrowthvalues, setchildgrowthvalues] = useState({
    //     "age": null,
    //     "height": null,
    //     "weight": null, "grossMotor": null, "fineMotor": null, "overActivity": null, "inActivity": null, "communicationSkill": null, "problemSolving": null, "memory": null,
    //     "socialSkill": null, "attentionConcentration": null, "direction": null, "visual": null, "spokenSkill": null, "readingWriting": null,
    //     "emotionalLevel": null,
    //     "planningOrganization": null,
    //     "emotionalProblem": null
    // })
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

    const [walking, setWalking] = useState(2);
    const sWalking = (val) => { setWalking(val);
    console.log(walking) };
    const [jumping, setJumping] = useState(1);
    const [running, setRunning] = useState(1);

    let [physicalskills, setPhysicalSkills] = useState({
        walking: 1,
        jumping: 1, running: 1
    })
    const calculateGrossMotor = () => {
        console.log("Physical: " + JSON.stringify(walking)
            + JSON.stringify(jumping)
            + JSON.stringify(running))
        // if (physicalskills.walking > 1 &&
        //     physicalskills.running > 1 && physicalskills.jumping > 1
        // ) {
        //     let gross =
        //         parseFloat((physicalskills.walking +
        //             physicalskills.running + physicalskills.jumping
        //         ) / 3);
        //     console.log("Gross: " + gross)
        //     // setchildgrowthvalues({
        //     //     ...childgrowthvalues,
        //     //     grossMotor: gross
        //     // })
        //     // fillChildGrowthValues(childgrowthvalues)
        // }
        // else {
        //     console.log("Values are not filled!")
        // }
        if (walking > 1 &&
            running > 1 && jumping > 1
        ) {
            let gross =
                parseFloat((walking +
                    running + jumping
                ) / 3);
            console.log("Gross: " + gross)
            // setchildgrowthvalues({
            //     ...childgrowthvalues,
            //     grossMotor: gross
            // })
            // fillChildGrowthValues(childgrowthvalues)
        }
        else {
            console.log("Values are not filled!")
        }
    }
    const calculateWalking = (rating) => {
        console.log("1: " + rating)
        // setPhysicalSkills({
        //     ...physicalskills,
        //     walking: rating
        // })
        setWalking(rating)
        calculateGrossMotor()
    }
    const calculateJumping = (rating) => {
        console.log("2: " + rating)

        // setPhysicalSkills({
        //     ...physicalskills,
        //     jumping: rating
        // })
        setJumping(rating)
        calculateGrossMotor()
    }
    const calculateRunning = (rating) => {
        console.log("3: " + rating)

        // setPhysicalSkills({
        //     ...physicalskills,
        //     running: rating
        // })
        setRunning(rating);
        calculateGrossMotor()
    }

    let [extraSkills, setExtraSkills] = useState({
        expressions: 1.0, gesture: 1.0,
        body_language: 1.0
    })
    function calculateSocialExpressions(rating) {
        console.log("4: " + rating)
        // let temp_expression = parseFloat(rating) 
        // setExtraSkills({
        //     ...extraSkills,
        //     expressions: temp_expression
        // })
    }
    function calculateGestures(rating) {
        console.log("5: " + rating)
        let temp_gesture = parseFloat(rating)
        setExtraSkills({
            ...extraSkills,
            gesture: temp_gesture
        })
    }
    function calculateBodyLanguage(rating) {
        console.log("6: " + rating)
        let temp_body = parseFloat(rating)
        setExtraSkills({
            ...extraSkills,
            body_language: temp_body
        })
    }
    function calculateFineMotor() {
        // console.log("Extra: " + JSON.stringify(extraSkills))
        // if (extraSkills.expressions && extraSkills.gesture
        //     && extraSkills.body_language
        // ) {
        //     let fine =
        //         parseFloat((extraSkills.expressions +
        //             extraSkills.gesture + extraSkills.body_language
        //         )) / 3.0;
        //     setchildgrowthvalues({
        //         ...childgrowthvalues,
        //         fineMotor: parseFloat(fine)
        //     })
        //     fillChildGrowthValues(childgrowthvalues)
        // } else {
        //     console.log("FineMotor n.p")
        // }
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
        calculateGrossMotor();
        // calculateFineMotor();
        // fillChildGrowthValues(childgrowthvalues);
        // console.log("ChildGrowthVal: " + JSON.stringify(childgrowthval));
        // if (childgrowthval.fineMotor &&
        //     childgrowthval.grossMotor &&
        //     childgrowthval.age &&
        //     childgrowthval.weight &&
        //     childgrowthval.height &&
        //     childgrowthval.communicationSkill &&
        //     childgrowthval.emotionalLevel &&
        //     childgrowthval.attentionConcentration &&
        //     childgrowthval.planningOrganization &&
        //     childgrowthval.direction &&
        //     childgrowthval.visual &&
        //     childgrowthval.memory &&
        //     childgrowthval.spokenSkill &&
        //     childgrowthval.readingWriting &&
        //     childgrowthval.socialSkill &&
        //     childgrowthval.emotionalProblem &&
        //     childgrowthval.fineMotor &&
        //     childgrowthval.problemSolving
        // ) {
        //     console.log("ChildGrowthVal: " + JSON.stringify(childgrowthval));
        //     axios.post("http://10.0.2.2:5000/getPredictions", childgrowthval).
        //         then(function (response) {
        //             console.log("Response: " + JSON.stringify(response.data.Message))
        //         }).catch(function (error) {
        //             console.log("Error: " + JSON.stringify(error))
        //         })
        // } else {
        //     console.log("NNot parsed")
        // }
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
                        {/* <Rating
                            ratingCount={5}
                            startingValue={1}
                            imageSize={20}
                            //onStartRating={calculateWalking}
                            onFinishRating={calculateWalking}
                        /> */}
                        <RatingComponent walking = {walking}
                        sWalking = {sWalking}
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
                        <Rating
                            ratingCount={5}
                            startingValue={1}
                            imageSize={20}
                            //onStartRating={calculateJumping}
                            onFinishRating={calculateJumping}
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
                        <Rating
                            ratingCount={5}
                            startingValue={1}
                            imageSize={20}
                            //onStartRating={calculateRunning}
                            onFinishRating={calculateRunning}
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
                        <Rating
                            ratingCount={5}
                            startingValue={1}
                            imageSize={20}
                            //onStartRating={calculateSocialExpressions}
                            onFinishRating={calculateSocialExpressions}
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
                        <Rating
                            ratingCount={5}
                            startingValue={1}
                            imageSize={20}
                            //onStartRating={calculateGestures}
                            onFinishRating={calculateGestures}
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
                        <Rating
                            ratingCount={5}
                            startingValue={1}
                            imageSize={20}
                            //onStartRating={calculateBodyLanguage}
                            onFinishRating={calculateBodyLanguage}
                        />
                    </View>
                </Center>
                <Center >
                    <ChildGrowthOp symptom="Communication"
                        calculateMethod={calculateCommunication}
                    />
                </Center>
                <Center >
                    <ChildGrowthOp symptom="Emotional Development"
                        calculateMethod={calculateEmotionalDevelopment}
                    />
                </Center>
                <Center >
                    <ChildGrowthOp symptom="Attention and Concentration"
                        calculateMethod={calculateAttention}
                    />
                </Center>
                <Center >
                    <ChildGrowthOp symptom="Overactivity and Impulsivity"
                        calculateMethod={calculateOverActivity}
                    />
                </Center>
                <Center >
                    <ChildGrowthOp symptom="Passivity/ Inactivity"
                        calculateMethod={calculateInactivity}
                    />
                </Center>
                <Center >
                    <ChildGrowthOp symptom="Planning/ Organising"
                        calculateMethod={calculatePlanning}
                    />
                </Center>
                <Center >
                    <ChildGrowthOp symptom="Perception of Directions"
                        calculateMethod={calculateDirection}
                    />
                </Center>
                <Center >
                    <ChildGrowthOp symptom="Perception of Visual Forms and Figures"
                        calculateMethod={calculateVisuals}
                    />
                </Center>
                <Center >
                    <ChildGrowthOp symptom="Memory"
                        calculateMethod={calculateMemory}
                    />
                </Center>
                <Center >
                    <ChildGrowthOp symptom="Spoken Language"
                        calculateMethod={calculateLanguager}
                    />
                </Center>
                <Center >
                    <ChildGrowthOp symptom="Reading/Writing"
                        calculateMethod={calculateReadingWriting}
                    />
                </Center>
                <Center >
                    <ChildGrowthOp symptom="Social Skills"
                        calculateMethod={calculateSocialSkills}
                    />
                </Center>
                <Center >
                    <ChildGrowthOp symptom="Emotional Problems"
                        calculateMethod={calculateEmotionalProblems}
                    />
                </Center>
                <Center >
                    <ChildGrowthOp symptom="Problem Solving"
                        calculateMethod={calculateProblemSolving}
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
