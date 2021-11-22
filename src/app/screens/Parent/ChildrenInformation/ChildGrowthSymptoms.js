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
    function calculateGrossMotor(rating) {
        console.log("Gross: " + rating)
    }
    function calculateFineMotor(rating) {
        console.log("Fine: " + rating)
    }
    function calculateCommunication(rating) {
        console.log("Fine: " + rating)
    }
    function calculateEmotionalDevelopment(rating) {
        console.log("Fine: " + rating)
    }
    function calculateAttention(rating) {
        console.log("Fine: " + rating)
    }
    function calculateOverActivity(rating) {
        console.log("Fine: " + rating)
    }
    function calculateInactivity(rating) {
        console.log("Fine: " + rating)
    }
    function calculatePlanning(rating) {
        console.log("Fine: " + rating)
    }
    function calculateDirection(rating) {
        console.log("Fine: " + rating)
    }
    function calculateVisuals(rating) {
        console.log("Fine: " + rating)
    }
    function calculateMemory(rating) {
        console.log("Fine: " + rating)
    }
    function calculateLanguager(rating) {
        console.log("Fine: " + rating)
    }
    function calculateReadingWriting(rating) {
        console.log("Fine: " + rating)
    }
    function calculateSocialSkills(rating) {
        console.log("Fine: " + rating)
    }
    function calculateEmotionalProblems(rating) {
        console.log("Fine: " + rating)
    }
    function calculateProblemSolving(rating) {
        console.log("Fine: " + rating)
    }
    const { fillChildGrowthValues } = useContext(PolioContext);
    let [service, setService] = React.useState("")
    let [childgrowthvalues, setchildgrowthvalues] = useState({
        "age": null,
        "height": null,
        "weight": null, "grossMotor": null, "fineMotor": null,
        "overActivity": null, "inActivity": null, "communicationSkill": null,
        "problemSolving": null, "memory": null,
        "socialSkill": null, "attentionConcentration": null, "direction": null,
        "visual": null, "spokenSkill": null, "readingWriting": null,
        "emotionalLevel": null,
        "planningOrganization": null,
        "emotionalProblem": null
    })
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
                                        subquestions.map((data) => {
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
                                                            onFinishRating={calculateGrossMotor}
                                                        /> : props.symptom ===
                                                            "Fine Motor" ?
                                                            <Rating
                                                                count={5}
                                                                startingValue={1}
                                                                imageSize={20}
                                                                onFinishRating={calculateFineMotor}
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