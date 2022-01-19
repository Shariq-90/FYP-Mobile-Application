import React, { useState, useEffect, useContext } from 'react'
import { View, Text, StyleSheet, Modal, Alert } from 'react-native'
import { Radio, Heading, HStack, Center, Button, Stack, Flex, ScrollView } from 'native-base';
import GraphModal from './ChildrenInformation/GraphModal';
import ChildGrowthQuestions from '../../../ChildGrowthQuestions';
import { PolioContext } from '../../../../Provider';
import axios from 'axios';
import PhysicalTraits from './ChildrenInformation/PhysicalTraits';
import GrossAndFineMotor from './GrossAndFineMotor';
import ChildGrowthOp from './ChildGrowthOp';
import RatingComponent from '../../RatingComponent';
import { ActivityIndicator, Colors } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
function CheckChildGrowth() {
    const [loading, setLoading] = useState(false)
    const [dietid, setdietid] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const closeMenu = () => setModalVisible(false);
    const { childgrowthval, fillChildGrowthValues } = useContext(PolioContext);
    const [mental, setmental] = useState("");
    const [physical, setphysical] = useState("");
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
    function predictGrowth(mental_score, physical_score) {
        if (mental_score >= 0 && mental_score < 15) {
            setmental("Your Child's Mental Growth is Below Average :(")
            if (physical_score >= 0 && physical_score < 15) {
                setdietid(0);
            }
            else if ((physical_score >= 15 && physical_score < 40)
            ) {
                setdietid(1);
            }
            else if ((physical_score >= 40 && physical_score < 50)
            ) {
                setdietid(2);
            }
        }
        else if ((mental_score >= 15 && mental_score < 40)
        ) {
            setmental("Your Child's Mental Growth is Normal :)")
            if (physical_score >= 0 && physical_score < 15) {
                setdietid(3);
            }
            else if ((physical_score >= 15 && physical_score < 40)
            ) {
                setdietid(4);
            }
            else if ((physical_score >= 40 && physical_score < 50)
            ) {
                setdietid(5);
            }
        }
        else if ((mental_score >= 40 && mental_score < 50)
        ) {
            setmental("Your Child's Mental Growth is Above Average :o")
            if (physical_score >= 0 && physical_score < 15) {
                setdietid(6);
            }
            else if ((physical_score >= 15 && physical_score < 40)
            ) {
                setdietid(7);
            }
            else if ((physical_score >= 40 && physical_score < 50)
            ) {
                setdietid(8);
            }
        }
        if (physical_score >= 0 && physical_score < 15) {
            setphysical("Your Child's Physical Growth is Below Average :(")
        }
        else if ((physical_score >= 15 && physical_score < 40)
        ) {
            setphysical("Your Child's Physical Growth is Normal :)")
        }
        else if ((physical_score >= 40 && physical_score < 50)
        ) {
            setphysical("Your Child's Physical Growth is Above Average :o")
        }
    }
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
    function calculateBMI(height, weight) {
        const hei = parseFloat((height * height)*100);
        const bmi = parseFloat((weight/hei)*100)
        return bmi;
    }


    let [physicalskills, setPhysicalSkills] = useState({
        walking: null,
        jumping: null, running: null
    })

    const calculateGrossMotor = () => {
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
        expressions: null, gesture: null,
        body_language: null
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
    const clearFormValues = () => {
        setchildgrowthvalues({
            ...childgrowthvalues,
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
        setExtraSkills({
            ...extraSkills,
            expressions: null,
            body_language: null,
            gesture: null
        })
        setPhysicalSkills({
            ...physicalskills,
            walking: null,
            jumping: null,
            running: null
        })
    }
    const calculateChildGrowth = () => {
        calculateGrossMotor();
        calculateFineMotor();
        fillChildGrowthValues(childgrowthvalues);
        setLoading(true);
        if (childgrowthvalues.age
            && childgrowthvalues.weight && childgrowthvalues.height
            && childgrowthvalues.grossMotor
            && childgrowthvalues.fineMotor
            && childgrowthvalues.overActivity
            && childgrowthvalues.inActivity
            && childgrowthvalues.communicationSkill
            && childgrowthvalues.problemSolving
            && childgrowthvalues.memory
            && childgrowthvalues.socialSkill
            && childgrowthvalues.attentionConcentration
            && childgrowthvalues.direction
            && childgrowthvalues.visual
            && childgrowthvalues.spokenSkill
            && childgrowthvalues.readingWriting
            && childgrowthvalues.emotionalLevel
            && childgrowthvalues.planningOrganization
            && childgrowthvalues.emotionalProblem) {
            let bmi = calculateBMI(childgrowthvalues.height, childgrowthvalues.weight)
            const postValues = {
                "age": Number(childgrowthvalues.age),
                "height": Number(Number(bmi) < 12 ? 0.01 :
                    Number(bmi) >= 12 && Number(bmi) < 25 ? 5.01 : 8.3
                ),
                "weight": Number(Number(bmi) < 12 ? 0.0 :
                    Number(bmi) >= 12 && Number(bmi) < 25 ? 5.01 : 8.3
                ),
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
            console.log("ChildGrowthVal: " + JSON.stringify(postValues));
            axios.post("http://10.0.2.2:5000/getPredictions", postValues
            ).
            then(function (response) {
                setLoading(false);
                console.log("Response Message: " + JSON.stringify(response.data.Message))
                let score = JSON.stringify(response.data.Message)
                let mental_score = parseFloat(score.substring(18,
                    score.search("]")
                ))
                let parse_physical_score = score.substring(score.search("Physical"))
                ;
                let physical_score = parseFloat(parse_physical_score
                    .substring(
                        parse_physical_score.indexOf("[") + 1, parse_physical_score.indexOf("]")))
                predictGrowth(mental_score, physical_score)
                clearFormValues();
                setModalVisible(true);
            }).catch(function (error) {
                console.log("Error: " + JSON.stringify(error))
            })
        }
        else {
            setLoading(false);
            alert("Please fill all the values")
        }

    }
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
                {loading ? <Center mb="10">
                        <ActivityIndicator animating={loading}
                                           size={40}
                                           color={Colors.red800} />
                    </Center> :
                    <View>
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
                        {/* <Center > */}
                        <GrossAndFineMotor i={0} j={1} k={2}
                                           symptom="Gross Motor"
                        />
                        <View style={{
                            marginTop: 10,
                            flexDirection: 'row',
                            marginLeft: 15
                        }}>
                            <FontAwesome name="chevron-right" size={20}
                                         style={{
                                             marginRight: 5
                                         }} />
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
                            marginLeft: 15
                        }}>
                            <FontAwesome name="chevron-right" size={20}
                                         style={{
                                             marginRight: 5
                                         }} />
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
                            marginLeft: 15
                        }}>
                            <FontAwesome name="chevron-right" size={20}
                                         style={{
                                             marginRight: 5
                                         }} />
                            <Heading textAlign="left"
                                     size="sm">{ChildGrowthQuestions.
                            find(o => o.key === "Gross Motor").
                                subquestions[2].data}</Heading>
                            <RatingComponent rating={physicalskills.running}
                                             setRating={calculateRunning}
                            />
                        </View>
                        <GrossAndFineMotor i={0} j={1} k={2}
                                           symptom="Fine Motor"
                        />
                        <View style={{
                            marginTop: 10,
                            flexDirection: 'row',
                            marginLeft: 15
                        }}>
                            <FontAwesome name="chevron-right" size={20}
                                         style={{
                                             marginRight: 5
                                         }} />
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
                            marginLeft: 15
                        }}>
                            <FontAwesome name="chevron-right" size={20}
                                         style={{
                                             marginRight: 5
                                         }} />
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
                            marginLeft: 15
                        }}>
                            <FontAwesome name="chevron-right" size={20}
                                         style={{
                                             marginRight: 5
                                         }} />
                            <Heading textAlign="left"
                                     size="sm">{ChildGrowthQuestions.
                            find(o => o.key === "Fine Motor").
                                subquestions[2].data}</Heading>
                            <RatingComponent rating={extraSkills.body_language}
                                             setRating={calculateBodyLanguage}
                            />
                        </View>
                        <ChildGrowthOp symptom="Communication"
                                       rating={childgrowthvalues.communicationSkill}
                                       setRating={calculateCommunication}
                        />
                        <ChildGrowthOp symptom="Emotional Development"
                                       rating={childgrowthvalues.emotionalLevel}
                                       setRating={calculateEmotionalDevelopment}
                        />
                        <ChildGrowthOp symptom="Attention and Concentration"
                                       rating={childgrowthvalues.attentionConcentration}
                                       setRating={calculateAttention}
                        />
                        <ChildGrowthOp symptom="Overactivity and Impulsivity"
                                       rating={childgrowthvalues.overActivity}
                                       setRating={calculateOverActivity}
                        />
                        <ChildGrowthOp symptom="Passivity/ Inactivity"
                                       rating={childgrowthvalues.inActivity}
                                       setRating={calculateInactivity}
                        />
                        <ChildGrowthOp symptom="Planning/ Organising"
                                       rating={childgrowthvalues.planningOrganization}
                                       setRating={calculatePlanning}
                        />
                        <ChildGrowthOp symptom="Perception of Directions"
                                       rating={childgrowthvalues.direction}
                                       setRating={calculateDirection}
                        />
                        <ChildGrowthOp symptom="Perception of Visual Forms and Figures"
                                       rating={childgrowthvalues.visual}
                                       setRating={calculateVisuals}
                        />
                        <ChildGrowthOp symptom="Memory"
                                       rating={childgrowthvalues.memory}
                                       setRating={calculateMemory}
                        />
                        <ChildGrowthOp symptom="Spoken Language"
                                       rating={childgrowthvalues.spokenSkill}
                                       setRating={calculateLanguager}
                        />
                        <ChildGrowthOp symptom="Reading/Writing"
                                       rating={childgrowthvalues.readingWriting}
                                       setRating={calculateReadingWriting}
                        />
                        <ChildGrowthOp symptom="Social Skills"
                                       rating={childgrowthvalues.socialSkill}
                                       setRating={calculateSocialSkills}
                        />
                        <ChildGrowthOp symptom="Emotional Problems"
                                       rating={childgrowthvalues.emotionalProblem}
                                       setRating={calculateEmotionalProblems}
                        />
                        <ChildGrowthOp symptom="Problem Solving"
                                       rating={childgrowthvalues.problemSolving}
                                       setRating={calculateProblemSolving}
                        />
                        {/* </Center> */}
                        <Center style={{ marginTop: 40, marginBottom: 40 }}>
                            <Button key="lg" size="lg" onPress={() => {
                                // setModalVisible(true);
                                calculateChildGrowth();
                            }}>
                                Generate Report
                            </Button>
                        </Center>
                    </View>}
                {/* <Swipeable> */}
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
                                dietid = {dietid}
                    />
                </Modal>
                {/* </Swipeable> */}
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
