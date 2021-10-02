import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Radio, Heading, HStack, Center, Stack, Flex, Button } from 'native-base';
import PolioSymptomOptions from './PolioSymptomOptions';

function CheckPolioSymptoms() {
    return (
        <Flex
            direction="column"
        >
            <Center style = {{
                marginTop: 60
            }}>
                <Heading textAlign="center" mb="10" size="xl">
                    Polio Symptoms
                </Heading>
            </Center>
            <Center >
                <PolioSymptomOptions symptom="Fever" />
            </Center>
            <Center >
                <PolioSymptomOptions symptom="HeadAche" />
            </Center>
            <Center >
                <PolioSymptomOptions symptom="Vomiting" />
            </Center>
            <Center style = {{marginTop: 40}}>
                <Button key = "lg" size = "lg"
                >
                    Generate Report
                </Button>
            </Center>
        </Flex>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
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
export default CheckPolioSymptoms
