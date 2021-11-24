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
import { Rating } from 'react-native-elements';
import { PolioContext } from '../../../../../Provider';
import ChildGrowthQuestions from '../../../../ChildGrowthQuestions';
import PhysicalTraits from './PhysicalTraits';
// import { TextInput } from 'react-native-paper';


function ChildGrowthSymptoms(props) {
    let [extraSkills, setExtraSkills] = useState({
        walking: null,
        jumping: null, running: null, expressions: null, gesture: null,
        body_language: null
    })
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
    const { fillChildGrowthValues } = useContext(PolioContext);
    function setAge(val) {
        setchildgrowthvalues({
            ...childgrowthvalues,
            age: val
        })
    }
    function setWeight(val) {
        setchildgrowthvalues({
            ...childgrowthvalues,
            weight: val
        })
    }
    function setHeight(val) {
        setchildgrowthvalues({
            ...childgrowthvalues,
            height: val
        })
    }
    function calculateWalking(rating) {
        setExtraSkills({
            ...extraSkills,
            walking: parseFloat(rating)
        })
        // if (extraSkills.walking){
        //     console.log("Walking: "+ extraSkills.walking)
        // }
        calculateGrossMotor(extraSkills)
    }
    function calculateJumping(rating) {
        setExtraSkills({
            ...extraSkills,
            jumping: parseFloat(rating)
        })
        calculateGrossMotor(extraSkills)
    }
    function calculateRunning(rating) {
        setExtraSkills({
            ...extraSkills,
            running: parseFloat(rating)
        })
        calculateGrossMotor(extraSkills)
    }
    function calculateSocialExpressions(rating) {
        setExtraSkills({
            ...extraSkills,
            expressions: parseFloat(rating)
        })
        calculateFineMotor(extraSkills)
    }
    function calculateGestures(rating) {
        setExtraSkills({
            ...extraSkills,
            gesture: parseFloat(rating)
        })
        calculateFineMotor(extraSkills)
    }
    function calculateBodyLanguage(rating) {
        setExtraSkills({
            ...extraSkills,
            body_language: parseFloat(rating)
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
                grossMotor: parseFloat(gross)
            })
            //fillChildGrowthValues(childgrowthvalues)
        }
    }
    function calculateFineMotor(physicalskills) {
        if (physicalskills.expressions && physicalskills.gesture
            && physicalskills.body_language
        ) {
            let fine = parseFloat(
                (parseFloat(physicalskills.expressions) +
                    parseFloat(physicalskills.gesture) + parseFloat(physicalskills.body_language)
                ) / 3
            );
            setchildgrowthvalues({
                ...childgrowthvalues,
                fineMotor: parseFloat(fine)
            })
            //fillChildGrowthValues(childgrowthvalues)
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
    // useEffect(() => {
    //     console.log("Yellow bro!")
    //     fillChildGrowthValues(childgrowthvalues);
    // }, [childgrowthvalues])
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
                                    {props.symptom === "Age" ?
                                        <PhysicalTraits symptom="Age"
                                            trait={childgrowthvalues.age ?
                                                childgrowthvalues.age : ""
                                            }
                                            setTrait={setAge}
                                        />
                                        : props.symptom === "Weight" ?
                                            <PhysicalTraits symptom="Weight"
                                                trait={childgrowthvalues.weight ?
                                                    childgrowthvalues.weight : ""
                                                }
                                                setTrait={setWeight}
                                            />
                                            : props.symptom === "Height" ?
                                                <PhysicalTraits symptom="Height"
                                                    trait={childgrowthvalues.height ?
                                                        childgrowthvalues.height : ""
                                                    }
                                                    setTrait={setHeight}
                                                /> : ""
                                    }
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