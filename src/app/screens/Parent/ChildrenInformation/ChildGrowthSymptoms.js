import React, { useState, useContext, useEffect } from 'react'
import { Alert, TextInput, View } from "react-native";

import {
    AddIcon,
    Flex,
    Center,
    ScrollView,
    VStack, Heading,
    Spacer, ChevronDownIcon, CheckIcon, Input, Text, Select
} from "native-base"
import { Icon } from 'react-native-elements'
import { Rating } from 'react-native-elements';
import { PolioContext } from '../../../../../Provider';
import ChildGrowthQuestions from '../../../../ChildGrowthQuestions';
// import { TextInput } from 'react-native-paper';


function ChildGrowthSymptoms(props) {
    let [extraSkills, setExtraSkills] = useState({
        walking: 1.0,
        jumping: 1.0, running: 1.0, expressions: 1.0, gesture: 1.0,
        body_language: 1.0
    })
    let [childgrowthvalues, setchildgrowthvalues] = useState({
        "age": 1.0,
        "height": 1.0,
        "weight": 1.0, "grossMotor": 1.0, "fineMotor": 1.0,
        "overActivity": 1.0, "inActivity": 1.0, "communicationSkill": 1.0,
        "problemSolving": 1.0, "memory": 1.0,
        "socialSkill": 1.0, "attentionConcentration": 1.0, "direction": 1.0,
        "visual": 1.0, "spokenSkill": 1.0, "readingWriting": 1.0,
        "emotionalLevel": 1.0,
        "planningOrganization": 1.0,
        "emotionalProblem": 1.0
    })
    const { fillChildGrowthValues } = useContext(PolioContext);
    function calculateWalking(rating) {
        setExtraSkills({
            ...extraSkills,
            walking: rating
        })
        calculateGrossMotor(extraSkills)
    }
    function calculateJumping(rating) {
        setExtraSkills({
            ...extraSkills,
            jumping: rating
        })
        calculateGrossMotor(extraSkills)
    }
    function calculateRunning(rating) {
        setExtraSkills({
            ...extraSkills,
            running: rating
        })
        calculateGrossMotor(extraSkills)
    }
    function calculateSocialExpressions(rating) {
        setExtraSkills({
            ...extraSkills,
            expressions: rating
        })
        calculateFineMotor(extraSkills)
    }
    function calculateGestures(rating) {
        setExtraSkills({
            ...extraSkills,
            gesture: rating
        })
        calculateFineMotor(extraSkills)
    }
    function calculateBodyLanguage(rating) {
        setExtraSkills({
            ...extraSkills,
            body_language: rating
        })
        calculateFineMotor(extraSkills)
    }
    function calculateGrossMotor(physicalskills) {
        if (physicalskills.walking && physicalskills.jumping
            && physicalskills.running
        ) {
            let gross = parseFloat(
                (parseFloat(physicalskills.walking) +
                    parseFloat(physicalskills.jumping) + parseFloat(physicalskills.running)
                ) / 3
            );
            setchildgrowthvalues({
                ...childgrowthvalues,
                grossMotor: gross
            })
            fillChildGrowthValues(childgrowthvalues)
        }
    }
    function calculateFineMotor(physicalskills) {
        if (physicalskills.expressions && physicalskills.gesture
            && physicalskills.body_language
        ) {
            let gross = parseFloat(
                (parseFloat(physicalskills.expressions) +
                    parseFloat(physicalskills.gesture) + parseFloat(physicalskills.body_language)
                ) / 3
            );
            setchildgrowthvalues({
                ...childgrowthvalues,
                fineMotor: gross
            })
            fillChildGrowthValues(childgrowthvalues)
        }
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
    useEffect(()=>{
        fillChildGrowthValues(childgrowthvalues);
    },[])
    return (
        <ScrollView>
            <Center mt="4">
                <VStack w="100%">
                    <Flex
                        direction="row"
                    >
                        <Spacer />
                        <Center >
                            {props.symptom === "Weight" ||
                                props.symptom === "Height" ||
                                props.symptom === "Age" ?
                                <View style={{ marginBottom: 10 }}>
                                    <TextInput
                                        style={{
                                            top: 1,
                                            height: 50,
                                            flex: 1,
                                            color: '#001027',
                                            textAlign: "left",
                                            width: 300,
                                            padding: 10,
                                            fontWeight: "bold",
                                            borderColor: 'black',
                                            borderWidth: 0.5
                                        }
                                        }
                                        placeholder={props.symptom}
                                        placeholderTextColor="#00000087"
                                        value={props.symptom === "Weight" ?
                                            childgrowthvalues.weight :
                                            props.symptom === "Height" ?
                                                childgrowthvalues.height :
                                                props.symptom === "Age" ?
                                                    childgrowthvalues.age : "2"}
                                        onChangeText=
                                        {(val) => {
                                            props.symptom === "Weight" ?
                                                setchildgrowthvalues({
                                                    ...childgrowthvalues,
                                                    weight: val
                                                },
                                                    fillChildGrowthValues(childgrowthvalues)
                                                ) :
                                                props.symptom === "Height" ?
                                                    setchildgrowthvalues({
                                                        ...childgrowthvalues,
                                                        height: val
                                                    },
                                                        fillChildGrowthValues(childgrowthvalues)) :
                                                    props.symptom === "Age" ?
                                                        setchildgrowthvalues({
                                                            ...childgrowthvalues,
                                                            age: val
                                                        },
                                                            fillChildGrowthValues(childgrowthvalues)) : ""
                                        }}
                                    />
                                </View>
                                : (props.symptom === "Gross Motor" ||
                                    props.symptom === "Fine Motor"
                                ) ? <View style={{ padding: 15 }}>
                                    <Heading textAlign="center" size="lg">
                                        {ChildGrowthQuestions.find(o => o.key === props.symptom).key}
                                    </Heading>
                                    <Heading textAlign="left" mt="5" size="md">
                                        {ChildGrowthQuestions.find(o => o.key ===
                                            props.symptom).question}</Heading>
                                    {ChildGrowthQuestions.find(o => o.key === props.symptom).
                                        subquestions.map((data, index) => {
                                            return (
                                                <View key={data.q_id} style={{
                                                    marginTop: 10,
                                                    flexDirection: 'row',
                                                }}>
                                                    <Heading textAlign="left"
                                                        size="sm">{data.data}</Heading>
                                                    {props.symptom ===
                                                        "Gross Motor" ?
                                                        <Rating
                                                            count={5}
                                                            startingValue={1}
                                                            imageSize={20}
                                                            onFinishRating={
                                                                data.q_id == 0 ?
                                                                    calculateWalking :
                                                                    data.q_id == 1 ?
                                                                        calculateJumping :
                                                                        calculateRunning
                                                            }
                                                        /> : props.symptom ===
                                                            "Fine Motor" ?
                                                            <Rating
                                                                count={5}
                                                                startingValue={1}
                                                                imageSize={20}
                                                                onFinishRating={
                                                                    data.q_id == 0 ?
                                                                        calculateSocialExpressions :
                                                                        data.q_id == 1 ?
                                                                            calculateGestures :
                                                                            calculateBodyLanguage
                                                                }
                                                            /> : ""
                                                    }
                                                </View>
                                            )
                                        })}

                                </View> :
                                    <View style={{ padding: 15 }}>
                                        <Heading textAlign="center" size="lg"
                                        >
                                            {ChildGrowthQuestions.find(o => o.key === props.symptom).key}
                                        </Heading>
                                        <View>
                                            <Heading textAlign="left" mt="5" size="md">
                                                {ChildGrowthQuestions.find(o => o.key ===
                                                    props.symptom).question}</Heading>
                                            {props.symptom === "Communication" ?
                                                <Rating
                                                    count={5}
                                                    startingValue={1}
                                                    imageSize={20}
                                                    onFinishRating={calculateCommunication}
                                                /> : props.symptom === "Emotional Development" ?
                                                    <Rating
                                                        count={5}
                                                        startingValue={1}
                                                        imageSize={20}
                                                        onFinishRating={calculateEmotionalDevelopment}
                                                    /> : props.symptom === "Attention and Concentration" ?
                                                        <Rating
                                                            count={5}
                                                            startingValue={1}
                                                            imageSize={20}
                                                            onFinishRating={calculateAttention}
                                                        /> : props.symptom === "Overactivity and Impulsivity" ?
                                                            <Rating
                                                                count={5}
                                                                startingValue={1}
                                                                imageSize={20}
                                                                onFinishRating={calculateOverActivity}
                                                            /> : props.symptom === "Passivity/ Inactivity" ?
                                                                <Rating
                                                                    count={5}
                                                                    startingValue={1}
                                                                    imageSize={20}
                                                                    onFinishRating={calculateInactivity}
                                                                /> : props.symptom === "Planning/ Organising" ?
                                                                    <Rating
                                                                        count={5}
                                                                        startingValue={1}
                                                                        imageSize={20}
                                                                        onFinishRating={calculatePlanning}
                                                                    /> : props.symptom === "Perception of Directions" ?
                                                                        <Rating
                                                                            count={5}
                                                                            startingValue={1}
                                                                            imageSize={20}
                                                                            onFinishRating={calculateDirection}
                                                                        /> : props.symptom === "Perception of Visual Forms and Figures" ?
                                                                            <Rating
                                                                                count={5}
                                                                                startingValue={1}
                                                                                imageSize={20}
                                                                                onFinishRating={calculateVisuals}
                                                                            /> : props.symptom === "Memory" ?
                                                                                <Rating
                                                                                    count={5}
                                                                                    startingValue={1}
                                                                                    imageSize={20}
                                                                                    onFinishRating={calculateMemory}
                                                                                /> : props.symptom === "Spoken Language" ?
                                                                                    <Rating
                                                                                        count={5}
                                                                                        startingValue={1}
                                                                                        imageSize={20}
                                                                                        onFinishRating={calculateLanguager}
                                                                                    /> : props.symptom === "Reading/Writing" ?
                                                                                        <Rating
                                                                                            count={5}
                                                                                            startingValue={1}
                                                                                            imageSize={20}
                                                                                            onFinishRating={calculateReadingWriting}
                                                                                        /> : props.symptom === "Social Skills" ?
                                                                                            <Rating
                                                                                                count={5}
                                                                                                startingValue={1}
                                                                                                imageSize={20}
                                                                                                onFinishRating={calculateSocialSkills}
                                                                                            /> : props.symptom === "Emotional Problems" ?
                                                                                                <Rating
                                                                                                    count={5}
                                                                                                    startingValue={1}
                                                                                                    imageSize={20}
                                                                                                    onFinishRating={calculateEmotionalProblems}
                                                                                                /> : props.symptom === "Problem Solving" ?
                                                                                                    <Rating
                                                                                                        count={5}
                                                                                                        startingValue={1}
                                                                                                        imageSize={20}
                                                                                                        onFinishRating={calculateProblemSolving}
                                                                                                    /> : ""
                                            }
                                        </View>
                                    </View>
                            }
                        </Center>
                    </Flex>
                </VStack>
            </Center>
        </ScrollView>
    )
}

export default ChildGrowthSymptoms
// TextInput: