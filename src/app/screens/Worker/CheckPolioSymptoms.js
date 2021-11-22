import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet, Modal, Alert } from 'react-native'
import { Radio, Heading, HStack, Center, Stack, Flex, Button } from 'native-base';
import PolioSymptomOptions from './PolioSymptomOptions';
import GraphModal from '../Parent/ChildrenInformation/GraphModal';
import { ScrollView } from 'react-native-gesture-handler';
import { PolioContext } from '../../../../Provider';

function CheckPolioSymptoms() {
    const [modalVisible, setModalVisible] = useState(false);
    const [confirmPolio, setPolio] = useState(false);

    const {
        age,
        noOfDoses,
        fatigue,
        fever,
        headache,
        stiffness,
        vomiting,
        daysofsymptom,
        limping,
        pain, getDoses,
        getFatigue,
        getFever,
        getHeadache,
        getStiffness,
        getVomiting,
        getDaysofSymptoms,
        getLimping, getPain,
    } = useContext(PolioContext)
    const closeMenu = () => {
        setModalVisible(false);
    };
    const checkPolio = () => {
        if (
            // age && 
            noOfDoses
            && daysofsymptom
            && fatigue
            && fever 
            && headache
             && stiffness 
            && vomiting  
            && limping
            && pain
        ) {
            if (parseInt(noOfDoses) == 0 && parseInt(daysofsymptom) > 0 && limping === "yes") {
                setPolio(true);
            }if (
                parseInt(noOfDoses) > 0 && parseInt(daysofsymptom) == 0 && limping === "yes"
                && ((fever === "yes" && headache === "yes" && vomiting === "yes"
                && fatigue === "yes" &&
               stiffness === "yes") || 
               (headache === "yes" && vomiting === "yes"
                && fatigue === "yes" &&
               stiffness === "yes" && pain === "yes") ||
                (fever === "yes" && vomiting === "yes"
               && fatigue === "yes" &&
              stiffness === "yes" && pain === "yes") || 
              (headache === "yes" && fever === "yes"
                && fatigue === "yes" &&
               stiffness === "yes" && pain === "yes") || 
               (headache === "yes" && vomiting === "yes"
                && fever === "yes" &&
               stiffness === "yes" && pain === "yes") || 
               (headache === "yes" && vomiting === "yes"
                && fatigue === "yes" &&
               fever === "yes" && pain === "yes"))
            ){
                setPolio(true);
            }
            if (parseInt(daysofsymptom) > 20){
                setPolio(true);
            }
            setModalVisible(true)
        }
        else {
            Alert.alert("Polio Symptoms", "Please fill all the values!");
        }
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
                        Check Polio Symptoms
                    </Heading>
                </Center>
                <Center style={{ marginTop: -30 }}>
                    <PolioSymptomOptions symptom="Age (in years)" textField="true"
                    />
                </Center>
                <Center style={{ marginTop: -30 }}>
                    <PolioSymptomOptions symptom="Days of Symptom" textField="true"
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
                {/* <Center >
                    <PolioSymptomOptions symptom="Parent Have Symptoms?" />
                </Center> */}
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
                <Center style={{ marginTop: 40, marginBottom : 20 }}>
                    <Button key="lg" size="lg"
                        onPress={() => {
                            checkPolio();
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
                        displayText={confirmPolio ? "You have polio symptoms!" :
                            "You don't have polio symptoms!"}
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
