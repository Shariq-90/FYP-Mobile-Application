import React, { useState } from 'react'
import { View, Text, StyleSheet, Modal } from 'react-native'
import { Radio, Heading, HStack, Center, Stack, Flex, Button } from 'native-base';
import PolioSymptomOptions from './PolioSymptomOptions';
import GraphModal from '../Parent/ChildrenInformation/GraphModal';
import { ScrollView } from 'react-native-gesture-handler';

function CheckPolioSymptoms() {
    const [modalVisible, setModalVisible] = useState(false);
    const closeMenu = () => setModalVisible(false);

    const checkPolio = ()=>{

    }

    return (
        <ScrollView>
            <Flex flex={1}
                direction="column"
                backgroundColor="white"
            >
                <Center style={{
                    marginTop: 60
                }}>
                    <Heading textAlign="center" mb="10" size="xl">
                        Polio Symptoms
                    </Heading>
                </Center>
                <Center style={{ marginTop: -30 }}>
                    <PolioSymptomOptions symptom="Age" textField="true"
                    />
                </Center>
                <Center style={{ marginTop: -30 }}>
                    <PolioSymptomOptions symptom="No of Doses" textField="true"
                    />
                </Center>
                <Center style={{ marginTop: -20 }}>
                    <PolioSymptomOptions symptom="Fever" />
                </Center>
                <Center >
                    <PolioSymptomOptions symptom="HeadAche" />
                </Center>
                <Center >
                    <PolioSymptomOptions symptom="Vomiting" />
                </Center>
                <Center >
                    <PolioSymptomOptions symptom="Fatigue" />
                </Center>
                <Center >
                    <PolioSymptomOptions symptom="Neck Stiffness" />
                </Center>
                <Center >
                    <PolioSymptomOptions symptom="Pain in Arms or Legs?" />
                </Center>
                <Center >
                    <PolioSymptomOptions symptom="Limping" />
                </Center>
                {/* <Center style={{ marginTop: -30 }}>
                    <PolioSymptomOptions 
                    experience = "true"
                    symptom="Since how many days are you experiencing these symptoms?" textField="true"
                    />
                </Center> */}
                <Center style={{ marginTop: 40 }}>
                    <Button key="lg" size="lg"
                        onPress={() => {
                            setModalVisible(true)
                        }}
                    >
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
                    <GraphModal closeMenu={closeMenu}
                        displayText="You don't have polio symptoms!"
                        polio="polio"
                    />
                </Modal>
            </Flex>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: 'white'
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
