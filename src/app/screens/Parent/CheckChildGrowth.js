import React, { useState } from 'react'
import { View, Text, StyleSheet, Modal,Alert } from 'react-native'
import { Radio, Heading, HStack, Center, Stack, Flex, Button, ScrollView } from 'native-base';
import ChildGrowthSymptoms from './ChildrenInformation/ChildGrowthSymptoms';

import GraphModal from './ChildrenInformation/GraphModal';


function CheckChildGrowth() {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <ScrollView>
            <Flex
                direction="column"
            >
                <Center style={{
                    marginTop: 60
                }}>
                    <Heading textAlign="center" mb="10" size="xl">
                        Check Child Growth
                    </Heading>
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Height" />
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Weight" />
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Age" />
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Age" />
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Age" />
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Age" />
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Age" />
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Age" />
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Age" />
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Age" />
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Age" />
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Age" />
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Age" />
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Age" />
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Age" />
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Age" />
                </Center>
                <Center style={{ marginTop: 40, marginBottom: 40 }}>
                    <Button key="lg" size="lg" onPress = {()=>{
                        setModalVisible(true);
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
                    <GraphModal></GraphModal>
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
