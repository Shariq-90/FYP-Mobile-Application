import React, { useState, useContext } from 'react'
import {
    Flex,
    Center,
    ScrollView,
    VStack,
    Spacer, Radio, Text
} from "native-base"
import { View, TextInput, StyleSheet } from 'react-native';
import { PolioContext } from '../../../../Provider';



function PolioSymptomOptions(props) {
    let [polioSymptoms, setPolioSymptoms] = useState({
        age: "", noOfDoses: "", fatigue: "", fever: "", headache: "", stiffness: "",
        vomiting: "", daysofsymptom: "", limping: "", pain: "", symptominparents: ""
    })
    const { getAge,
        getDoses,
        getFatigue,
        getFever,
        getHeadache,
        getStiffness,
        getVomiting,
        getDaysofSymptoms,
        getLimping, getPain, setParentSymptoms,
        age,
        noOfDoses,
        fatigue,
        fever,
        headache,
        stiffness,
        vomiting,
        daysofsymptom,
        limping,
        pain, symptominparents,
    } = useContext(PolioContext);
    return (
        <ScrollView>
            <Center mt="4">
                <VStack w="100%">
                    <Flex
                        direction="row"
                    >
                        <Center width="120">
                            <Text style={{ fontSize: 16 }}>
                                {props.textField && !props.experience ? "" : props.symptom}
                            </Text>
                        </Center>
                        <Spacer />
                        {!props.textField && !props.experience ? <Center >
                            <Radio.Group
                                name="myRadioGroup"
                                accessibilityLabel="favorite number"
                                value={props.symptom === "Fever?" ? fever :
                                    props.symptom === "Headache?" ? headache :
                                        props.symptom === "Vomiting?" ? vomiting :
                                            props.symptom === "Fatigue?" ? fatigue :
                                                props.symptom === "Neck Stiffness?" ? stiffness :
                                                    props.symptom === "Pain in Arms or Legs?" ? pain :
                                                        props.symptom === "Does anyone around child have polio?" ? symptominparents :
                                                            limping
                                }
                                onChange={(nextValue) => {
                                    props.symptom === "Fever?" ?
                                        getFever(nextValue) :
                                        props.symptom === "Headache?" ?
                                            getHeadache(nextValue) :
                                            props.symptom === "Vomiting?" ?
                                                getVomiting(nextValue) :
                                                props.symptom === "Fatigue?" ?
                                                    getFatigue(nextValue) :
                                                    props.symptom === "Neck Stiffness?" ?
                                                        getStiffness(nextValue) :
                                                        props.symptom === "Pain in Arms or Legs?" ?
                                                            getPain(nextValue) :
                                                            props.symptom === "Does anyone around child have polio?" ?
                                                                setParentSymptoms(nextValue) :
                                                                getLimping(nextValue)
                                }}
                                style={{
                                    flexDirection: "row",

                                }}
                            >
                                <Radio value="yes" my={1}>
                                    Yes
                                </Radio>
                                <Radio value="no" my={1}
                                    style={{ marginLeft: 10 }}>
                                    No
                                </Radio>
                            </Radio.Group>
                        </Center> : <View style={styles.textBox}>
                            <TextInput
                                keyboardType='numeric'
                                value={props.symptom === "Age (in years)" ? age :
                                    props.symptom === "No of Doses" ? noOfDoses :
                                        daysofsymptom
                                }
                                onChangeText={(val) => {
                                    props.symptom === "Age (in years)" ?
                                        getAge(val)
                                        :
                                        props.symptom === "Days of Symptom" ?
                                            getDaysofSymptoms(val) :
                                getDoses(val)
                            }}
                            style={{
                                color: '#001027',
                                textAlign: "center",
                                // width: 200,
                                padding: 10,
                                borderColor: 'black',
                                borderWidth: 0.5,
                                fontSize: 15
                            }
                            }
                            placeholder={props.experience ? "" : props.symptom}
                            placeholderTextColor="#001027"

                            />
                        </View>}
                    </Flex>
                </VStack>
            </Center>
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    textBox: {
        alignSelf: 'center',
        bottom: 1,
        height: 80,
        width: 200,
        right: 50,
        top: 10

    }
})

export default PolioSymptomOptions
