import React, { useState } from 'react'
import { TextInput, View } from "react-native";
import {
    AddIcon,
    Flex,
    Center,
    ScrollView,
    VStack,
    Spacer, ChevronDownIcon, CheckIcon, Input, Text, Select
} from "native-base"
import { Icon } from 'react-native-elements'
// import { TextInput } from 'react-native-paper';

function ChildGrowthSymptoms(props) {
    let [service, setService] = React.useState("")
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
                                <View style = {{marginBottom: 10}}>
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
                                : props.symptom === "Emotional Problem" ?
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