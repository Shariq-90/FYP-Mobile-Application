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
    let [dosevalue, setValue] = useState(null)
    let [polioSymptoms, setPolioSymptoms] = useState({
        age: "", noOfDoses: "", fatigue: "", fever: "", headache: "", stiffness: "",
        vomiting: "", daysofsymptom: "", limping: "", pain: "", symptominparents: ""
    })
    const setNoofDoses = (dose) => {
        if (parseFloat(dose) <= 0.5) {
            setValue("2");
        }
        else if (parseFloat(dose) > 0.5 && parseFloat(dose) <= 1.5) {
            setValue("4");
        } else {
            setValue("6");
        }
        console.log("Value: " + dosevalue)
    }
    const { getAge,
        getDoses,
        getFatigue,
        getFever,
        getHeadache,
        getStiffness,
        getVomiting,
        getDaysofSymptoms,
        getLimping, getPain, setParentSymptoms } = useContext(PolioContext);
    return (
        <ScrollView>
            <Center mt="4">
                <VStack w="100%">
                    <Flex
                        direction="row"
                    >
                        <Center width="120">
                            <Text style={{ fontSize: 17 }}>
                                {props.textField && !props.experience ? "" : props.symptom}
                            </Text>
                        </Center>
                        <Spacer />
                        {!props.textField && !props.experience ? <Center >
                            <Radio.Group
                                name="myRadioGroup"
                                accessibilityLabel="favorite number"
                                value={props.symptom === "Fever" ? polioSymptoms.fever :
                                    props.symptom === "HeadAche" ? polioSymptoms.headache :
                                        props.symptom === "Vomiting" ? polioSymptoms.vomiting :
                                            props.symptom === "Fatigue" ? polioSymptoms.fatigue :
                                                props.symptom === "Neck Stiffness" ? polioSymptoms.stiffness :
                                                    props.symptom === "Pain in Arms or Legs?" ? polioSymptoms.pain :
                                                        props.symptom === "Do Parents have symptoms?" ? polioSymptoms.symptominparents :
                                                            polioSymptoms.limping
                                }
                                onChange={(nextValue) => {
                                    props.symptom === "Fever" ? setPolioSymptoms({
                                        ...polioSymptoms,
                                        fever: nextValue,
                                    },
                                        getFever(nextValue)) :
                                        props.symptom === "HeadAche" ? setPolioSymptoms({
                                            ...polioSymptoms,
                                            headache: nextValue,

                                        }, getHeadache(nextValue)) :
                                            props.symptom === "Vomiting" ? setPolioSymptoms({
                                                ...polioSymptoms,
                                                vomiting: nextValue,

                                            }, getVomiting(nextValue)) :
                                                props.symptom === "Fatigue" ? setPolioSymptoms({
                                                    ...polioSymptoms,
                                                    fatigue: nextValue,

                                                }, getFatigue(nextValue)) :
                                                    props.symptom === "Neck Stiffness" ? setPolioSymptoms({
                                                        ...polioSymptoms,
                                                        stiffness: nextValue,

                                                    }, getStiffness(nextValue)) :
                                                        props.symptom === "Pain in Arms or Legs?" ? setPolioSymptoms({
                                                            ...polioSymptoms,
                                                            pain: nextValue,

                                                        }, getPain(nextValue)) :
                                                            props.symptom === "Do Parents have symptoms?" ? setPolioSymptoms({
                                                                ...polioSymptoms,
                                                                symptominparents: nextValue,

                                                            }, setParentSymptoms(nextValue)) :
                                                                setPolioSymptoms({
                                                                    ...polioSymptoms,
                                                                    limping: nextValue,

                                                                }, getLimping(nextValue))
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
                                value={props.symptom === "Age (in years)" ? polioSymptoms.age :
                                    props.symptom === "No of Doses" ? polioSymptoms.noOfDoses :
                                        polioSymptoms.daysofsymptom
                                }
                                onChangeText={(val) => {
                                    props.symptom === "Age (in years)" ? setPolioSymptoms({
                                        ...polioSymptoms,
                                        age: val
                                    }, getAge(val)
                                    ) :
                                        props.symptom === "Days of Symptom" ? setPolioSymptoms({
                                            ...polioSymptoms,
                                            daysofsymptom: val
                                        }, getDaysofSymptoms(val)) :
                                            setPolioSymptoms({
                                                ...polioSymptoms,
                                                noOfDoses: val
                                            }, getDoses(val))
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
        </ScrollView>
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
