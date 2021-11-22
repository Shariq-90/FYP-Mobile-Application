import React, { useState, useContext,useEffect } from 'react'
import { TextInput, View } from "react-native";

import {
    AddIcon,
    Flex,
    Center,
    ScrollView,
    VStack,Heading,
    Spacer, ChevronDownIcon, CheckIcon, Input, Text, Select
} from "native-base"
import { Icon } from 'react-native-elements'
import { Rating } from 'react-native-elements';
import { PolioContext } from '../../../../../Provider';
import ChildGrowthQuestions from '../../../../ChildGrowthQuestions';
// import { TextInput } from 'react-native-paper';


function ChildGrowthSymptoms(props) {
    function ratingCompleted(rating) {
        console.log("Rating is: " + rating)
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

                                    />
                                </View>
                                : (props.symptom === "Gross Motor" ||
                                    props.symptom === "Fine Motor"
                                ) ? <View style={{ padding: 15 }}>
                                    <Heading textAlign="center" size="lg">
                                {ChildGrowthQuestions.find(o => o.key === props.symptom).key}
                                    </Heading>
                                    <Heading textAlign="center" mt="5" size="md">
                                        {ChildGrowthQuestions.find(o => o.key === props.symptom).question}</Heading>
                                    {ChildGrowthQuestions.find(o => o.key === props.symptom).
                                        subquestions.map((data, index) => {
                                            return (
                                                <View style={{
                                                    marginTop: 5,
                                                    flexDirection: 'row', alignSelf: 'center'
                                                }}>
                                                    <Heading key={index} textAlign="center"
                                                        size="sm">{data}</Heading>
                                                    <Rating
                                                        count={5}
                                                        // reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable", "Jesus"]}
                                                        defaultRating={1}
                                                        imageSize={20}
                                                    />
                                                </View>
                                            )
                                        })}

                                </View> : props.symptom === "Emotional Problem" ?
                                    <Select
                                        label={props.symptom}
                                        selectedValue={service}
                                        minWidth="300"
                                        accessibilityLabel="Choose Service"
                                        placeholder={props.symptom}
                                        placeholderTextColor="black"
                                        _selectedItem={{
                                            bg: "teal.600",
                                            endIcon: <CheckIcon size="5" />,
                                        }}
                                        style={{
                                            fontSize: 20,
                                            // fontWeight: "bold",
                                            width: 300,
                                            shadowOffset: { width: 10, height: 10, },
                                            shadowColor: 'black',
                                            shadowOpacity: 1.0,
                                            textAlign: 'center',
                                            height: 100
                                        }}
                                        mt={1}
                                        // dropdownOpenIcon={require("../../../assets/dropdown.png")}
                                        onValueChange={(itemValue) => setService(itemValue)}
                                    >
                                        <Select.Item label="Yes" value="poor" />
                                        <Select.Item label="No" value="fair" />
                                    </Select> :
                                    <Select
                                        selectedValue={service}
                                        minWidth="300"
                                        accessibilityLabel="Choose Service"
                                        placeholder={props.symptom}
                                        placeholderTextColor="black"
                                        _selectedItem={{
                                            bg: "teal.600",
                                            endIcon: <CheckIcon size="5" />,
                                        }}
                                        style={{
                                            fontSize: 20,
                                            // fontWeight: "bold",
                                            width: 400,
                                            shadowOffset: { width: 10, height: 10, },
                                            shadowColor: 'black',
                                            shadowOpacity: 1.0,
                                            textAlign: 'center',
                                            height: "100%",
                                            borderWidth: 1,
                                            borderColor: 'black'
                                        }}
                                        mt={1}
                                        onValueChange={(itemValue) => setService(itemValue)}
                                    // dropdownIcon={
                                    //     <ChevronDownIcon size="4" />
                                    // }
                                    >
                                        <Select.Item label="Poor" value="poor" />
                                        <Select.Item label="Fair" value="fair" />
                                        <Select.Item label="Good" value="good" />
                                        <Select.Item label="Excellent" value="excellent" />
                                    </Select>
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