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
import PhysicalTraits from './ChildrenInformation/PhysicalTraits';
import GrossAndFineMotor from './GrossAndFineMotor';
import ChildGrowthOp from './ChildGrowthOp';


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
        "weight": null, "grossMotor": null, "fineMotor": null, "overActivity": null, "inActivity": null, "communicationSkill": null, "problemSolving": null, "memory": null,
        "socialSkill": null, "attentionConcentration": null, "direction": null, "visual": null, "spokenSkill": null, "readingWriting": null,
        "emotionalLevel": null,
        "planningOrganization": null,
        "emotionalProblem": null
    })
    let [extraSkills, setExtraSkills] = useState({
        expressions: 1, gesture: 1,
        body_language: 1
    })
    let [physicalskills, setPhysicalSkills] = useState({
        walking: 1,
        jumping: 1, running: 1
    })
    function calculateSocialExpressions(rating) {
        setExtraSkills({
            ...extraSkills,
            expressions: rating
        })
    }
    function calculateGestures(rating) {
        setExtraSkills({
            ...extraSkills,
            gesture: rating
        })
    }
    function calculateBodyLanguage(rating) {
        setExtraSkills({
            ...extraSkills,
            body_language: rating
        })
    }
    function calculateFineMotor() {
        if (extraSkills.expressions && extraSkills.gesture
            && extraSkills.body_language
        ) {
            let fine =
                parseFloat((extraSkills.expressions +
                    extraSkills.gesture + extraSkills.body_language
                )) / 3.0;
            setchildgrowthvalues({
                ...childgrowthvalues,
                fineMotor: parseFloat(fine)
            })
            fillChildGrowthValues(childgrowthvalues)
        } else {
            console.log("FineMotor n.p")
        }
    }
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
    function calculateWalking(rating) {
        setPhysicalSkills({
            ...physicalskills,
            walking: rating
        })
    }
    function calculateJumping(rating) {
        setPhysicalSkills({
            ...physicalskills,
            jumping: rating
        })
    }
    function calculateRunning(rating) {
        setPhysicalSkills({
            ...physicalskills,
            running: rating
        })
    }
    function calculateGrossMotor() {
        if (physicalskills.walking &&
            physicalskills.running && physicalskills.jumping
        ) {
            console.log("PhysicalSkills: " + JSON.stringify(physicalskills))
            let gross =
                (physicalskills.walking +
                    physicalskills.jumping + physicalskills.running
                ) / 3;
            setchildgrowthvalues({
                ...childgrowthvalues,
                grossMotor: parseFloat(gross)
            })
            fillChildGrowthValues(childgrowthvalues)
        }
        else {
            console.log("Values are not filled!")
        }
    }
    function calculateCommunication(rating) {

        setchildgrowthvalues({
            ...childgrowthvalues,
            communicationSkill: parseFloat(rating)
        });
        //fillChildGrowthValues(childgrowthvalues)
    }
    function calculateEmotionalDevelopment(rating) {

        setchildgrowthvalues({
            ...childgrowthvalues,
            emotionalLevel: parseFloat(parseFloat(rating))
        })
        //fillChildGrowthValues(childgrowthvalues)
    }
    function calculateAttention(rating) {

        setchildgrowthvalues({
            ...childgrowthvalues,
            attentionConcentration: parseFloat(rating)
        })
        //fillChildGrowthValues(childgrowthvalues)
    }
    function calculateOverActivity(rating) {

        setchildgrowthvalues({
            ...childgrowthvalues,
            overActivity: parseFloat(rating)
        })
        //fillChildGrowthValues(childgrowthvalues)
    }
    function calculateInactivity(rating) {

        setchildgrowthvalues({
            ...childgrowthvalues,
            inActivity: parseFloat(rating)
        })
        //fillChildGrowthValues(childgrowthvalues)
    }
    function calculatePlanning(rating) {

        setchildgrowthvalues({
            ...childgrowthvalues,
            planningOrganization: parseFloat(rating)
        })
        //fillChildGrowthValues(childgrowthvalues)
    }
    function calculateDirection(rating) {

        setchildgrowthvalues({
            ...childgrowthvalues,
            direction: parseFloat(rating)
        })
        //fillChildGrowthValues(childgrowthvalues)
    }
    function calculateVisuals(rating) {

        setchildgrowthvalues({
            ...childgrowthvalues,
            visual: parseFloat(rating)
        })
        //fillChildGrowthValues(childgrowthvalues)
    }
    function calculateMemory(rating) {

        setchildgrowthvalues({
            ...childgrowthvalues,
            memory: parseFloat(rating)
        })
        //fillChildGrowthValues(childgrowthvalues)
    }
    function calculateLanguager(rating) {

        setchildgrowthvalues({
            ...childgrowthvalues,
            spokenSkill: parseFloat(rating)
        })
        //fillChildGrowthValues(childgrowthvalues)
    }
    function calculateReadingWriting(rating) {

        setchildgrowthvalues({
            ...childgrowthvalues,
            readingWriting: parseFloat(rating)
        })
        //fillChildGrowthValues(childgrowthvalues)
    }
    function calculateSocialSkills(rating) {

        setchildgrowthvalues({
            ...childgrowthvalues,
            socialSkill: parseFloat(rating)
        })
        //fillChildGrowthValues(childgrowthvalues)
    }
    function calculateEmotionalProblems(rating) {

        setchildgrowthvalues({
            ...childgrowthvalues,
            emotionalProblem: parseFloat(rating)
        })
        //fillChildGrowthValues(childgrowthvalues)
    }
    function calculateProblemSolving(rating) {

        setchildgrowthvalues({
            ...childgrowthvalues,
            problemSolving: parseFloat(rating)
        })
        //fillChildGrowthValues(childgrowthvalues)
    }
    const calculateChildGrowth = () => {
        // fillChildGrowthValues(childgrowthvalues)
        calculateGrossMotor();
        calculateFineMotor();
        if (childgrowthval.fineMotor &&
            childgrowthval.grossMotor
        ) {
            console.log("ChildGrowthVal: " + JSON.stringify(childgrowthval));
            axios.post("http://10.0.2.2:5000/getPredictions", childgrowthval).
                then(function (response) {
                    console.log("Response: " + JSON.stringify(response.data.Message))
                }).catch(function (error) {
                    console.log("Error: " + JSON.stringify(error))
                })
        } else {
            console.log("NNot parsed")
        }
    }
    useEffect(() => {
        fillChildGrowthValues(childgrowthvalues)
    }, [childgrowthvalues])
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
                    {/* <ChildGrowthSymptoms symptom="Weight" /> */}
                    <PhysicalTraits symptom="Weight"
                        trait={childgrowthvalues.weight ?
                            JSON.stringify(childgrowthvalues.weight) : ""}
                        setTrait={setWeight}
                    />
                </Center>
                <Center style={{
                    marginTop: 30
                }}>
                    {/* <ChildGrowthSymptoms symptom="Height" /> */}
                    <PhysicalTraits symptom="Height"
                        trait={childgrowthvalues.height ?
                            JSON.stringify(childgrowthvalues.height) : ""}
                        setTrait={setHeight}
                    />
                </Center>
                <Center style={{
                    marginTop: 30
                }}>
                    {/* <ChildGrowthSymptoms symptom="Age" /> */}
                    <PhysicalTraits symptom="Age"
                        trait={childgrowthvalues.age ?
                            JSON.stringify(childgrowthvalues.age) : ""}
                        setTrait={setAge}
                    />
                </Center>
                <Center >
                    {/* <ChildGrowthSymptoms symptom="Gross Motor" /> */}
                    <GrossAndFineMotor i={0} j={1} k={2}
                        symptom="Gross Motor"
                    // calculateFirst={calculateWalking}
                    // calculatesecond={calculateJumping}
                    // calculateThird={calculateRunning}
                    />
                    <View style={{
                        marginTop: 10,
                        flexDirection: 'row',
                    }}>
                        <Heading textAlign="left"
                            size="sm">{ChildGrowthQuestions.
                                find(o => o.key === "Gross Motor").
                                subquestions[0].data}</Heading>
                        <Rating
                            count={5}
                            startingValue={1}
                            imageSize={20}
                            onStartRating={calculateWalking}
                            onFinishRating={calculateWalking}
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
                            count={5}
                            startingValue={1}
                            imageSize={20}
                            onStartRating={calculateJumping}
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
                            count={5}
                            startingValue={1}
                            imageSize={20}
                            onStartRating={calculateRunning}
                            onFinishRating={calculateRunning}
                        />
                    </View>
                </Center>
                <Center >
                    {/* <ChildGrowthSymptoms symptom="Fine Motor" /> */}
                    <GrossAndFineMotor i={0} j={1} k={2}
                        symptom="Fine Motor"
                    // calculateFirst={calculateWalking}
                    // calculatesecond={calculateJumping}
                    // calculateThird={calculateRunning}
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
                            count={5}
                            startingValue={1}
                            imageSize={20}
                            onStartRating={calculateSocialExpressions}
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
                            count={5}
                            startingValue={1}
                            imageSize={20}
                            onStartRating={calculateGestures}
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
                            count={5}
                            startingValue={1}
                            imageSize={20}
                            onStartRating={calculateBodyLanguage}
                            onFinishRating={calculateBodyLanguage}
                        />
                    </View>
                </Center>
                <Center >
                    {/* <ChildGrowthSymptoms symptom="Communication" /> */}
                    <ChildGrowthOp symptom="Communication"
                        calculateMethod={calculateCommunication}
                    />
                </Center>
                <Center >
                    {/* <ChildGrowthSymptoms symptom="Communication" /> */}
                    <ChildGrowthOp symptom="Emotional Development"
                        calculateMethod={calculateEmotionalDevelopment}
                    />
                </Center>
                <Center >
                    {/* <ChildGrowthSymptoms symptom="Communication" /> */}
                    <ChildGrowthOp symptom="Attention and Concentration"
                        calculateMethod={calculateAttention}
                    />
                </Center>
                <Center >
                    {/* <ChildGrowthSymptoms symptom="Communication" /> */}
                    <ChildGrowthOp symptom="Overactivity and Impulsivity"
                        calculateMethod={calculateOverActivity}
                    />
                </Center>
                <Center >
                    {/* <ChildGrowthSymptoms symptom="Communication" /> */}
                    <ChildGrowthOp symptom="Passivity/ Inactivity"
                        calculateMethod={calculateInactivity}
                    />
                </Center>
                <Center >
                    {/* <ChildGrowthSymptoms symptom="Communication" /> */}
                    <ChildGrowthOp symptom="Planning/ Organising"
                        calculateMethod={calculatePlanning}
                    />
                </Center>
                <Center >
                    {/* <ChildGrowthSymptoms symptom="Communication" /> */}
                    <ChildGrowthOp symptom="Perception of Directions"
                        calculateMethod={calculateDirection}
                    />
                </Center>
                <Center >
                    {/* <ChildGrowthSymptoms symptom="Communication" /> */}
                    <ChildGrowthOp symptom="Perception of Visual Forms and Figures"
                        calculateMethod={calculateVisuals}
                    />
                </Center>
                <Center >
                    {/* <ChildGrowthSymptoms symptom="Communication" /> */}
                    <ChildGrowthOp symptom="Memory"
                        calculateMethod={calculateMemory}
                    />
                </Center>
                <Center >
                    {/* <ChildGrowthSymptoms symptom="Communication" /> */}
                    <ChildGrowthOp symptom="Spoken Language"
                        calculateMethod={calculateLanguager}
                    />
                </Center>
                <Center >
                    {/* <ChildGrowthSymptoms symptom="Communication" /> */}
                    <ChildGrowthOp symptom="Reading/Writing"
                        calculateMethod={calculateReadingWriting}
                    />
                </Center>
                <Center >
                    {/* <ChildGrowthSymptoms symptom="Communication" /> */}
                    <ChildGrowthOp symptom="Social Skills"
                        calculateMethod={calculateSocialSkills}
                    />
                </Center>
                <Center >
                    {/* <ChildGrowthSymptoms symptom="Communication" /> */}
                    <ChildGrowthOp symptom="Emotional Problems"
                        calculateMethod={calculateEmotionalProblems}
                    />
                </Center>
                <Center >
                    {/* <ChildGrowthSymptoms symptom="Communication" /> */}
                    <ChildGrowthOp symptom="Problem Solving"
                        calculateMethod={calculateProblemSolving}
                    />
                </Center>
                {/* <Center >
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
                </Center> */}
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
