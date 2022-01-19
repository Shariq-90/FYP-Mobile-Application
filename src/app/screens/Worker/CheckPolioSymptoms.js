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
        pain, symptominparents,
        getAge,
        getDoses,
        getFatigue,
        getFever,
        getHeadache,
        getStiffness,
        getVomiting,
        getDaysofSymptoms,
        getLimping, getPain, setParentSymptoms
    } = useContext(PolioContext)
    const closeMenu = () => {
        setModalVisible(false);
    };
    const checkPolio = () => {
        if (
            age !== "" &&
            noOfDoses !== ""
            && daysofsymptom !== ""
            && fatigue !== ""
            && fever !== ""
            && headache !== ""
            && stiffness !== ""
            && vomiting !== ""
            && limping !== ""
            && pain !== ""
            && symptominparents !== ""
        ) {

            if (parseInt(daysofsymptom) > 20) {
                if (parseInt(noOfDoses) == 0 && limping === "yes") {
                    setPolio(true);
                }
                else if (parseInt(noOfDoses) >= 0 && limping === "yes"
                    && symptominparents === "yes"
                ) {
                    setPolio(true);
                }
                else if (
                    parseInt(noOfDoses) > 0 && limping === "yes"
                    && ((fever === "yes" && headache === "yes" && vomiting === "yes"
                        && fatigue === "yes" &&
                        stiffness === "yes"
                    ) ||
                        (headache === "yes" && vomiting === "yes"
                            && fatigue === "yes" &&
                            stiffness === "yes" && pain === "yes") ||
                        (vomiting === "yes"
                            && fatigue === "yes" &&
                            stiffness === "yes" && pain === "yes"
                            && symptominparents === "yes"
                        ) ||
                        (fever === "yes" && vomiting === "yes"
                            && fatigue === "yes" &&
                            stiffness === "yes" && pain === "yes") ||
                        (fever === "yes" && headache === "yes"
                            && fatigue === "yes" &&
                            stiffness === "yes" && pain === "yes") ||
                        (fever === "yes" && headache === "yes"
                            && vomiting === "yes" &&
                            stiffness === "yes" && pain === "yes")
                        ||
                        (fever === "yes" && headache === "yes"
                            && vomiting === "yes" &&
                            fatigue === "yes" && pain === "yes")
                        ||
                        (fever === "yes" && headache === "yes"
                            && vomiting === "yes" &&
                            fatigue === "yes" && symptominparents === "yes")
                        || (headache === "yes" && vomiting === "yes"
                            && fatigue === "yes" &&
                            pain === "yes" && symptominparents === "yes")
                        || (headache === "yes" && fatigue === "yes" && stiffness === "yes"
                            && pain === "yes" && symptominparents === "yes")
                    )
                ) {
                    setPolio(true);
                }
            } else {
                setPolio(false);
            }

            setModalVisible(true)
            getAge("");
            getDoses("");
            getFatigue("");
            getFever("");
            getHeadache("");
            getStiffness("");
            getVomiting("");
            getDaysofSymptoms("");
            getLimping("");
            getPain("");
            setParentSymptoms("");
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
                <Center style={{
                    borderRadius: 10,
                    borderColor: '#c7c7c7',}}>
                    <PolioSymptomOptions symptom="Age (in years)" textField="true"
                    />
                </Center>
                <Center style={{margin: -30,
                    borderRadius: 10,
                    borderColor: '#c7c7c7',}}>
                    <PolioSymptomOptions symptom="No of Doses" textField="true"
                    />
                </Center>
                <Center>
                    <PolioSymptomOptions symptom="Does your child have muscle limping?" />
                </Center>
                {/*<Center style={{marginTop:10,marginBottom:10}}>*/}
                {/*    Does your child have following symptoms?*/}
                {/*</Center>*/}
                <Center style={{ marginTop: -20 }}>
                    <PolioSymptomOptions symptom="Fever?" />
                </Center>
                <Center>
                    <PolioSymptomOptions symptom="Headache?" />
                </Center>
                <Center >
                    <PolioSymptomOptions symptom="Vomiting?" />
                </Center>
                <Center >
                    <PolioSymptomOptions symptom="Fatigue?" />
                </Center>
                <Center >
                    <PolioSymptomOptions symptom="Neck Stiffness?" />
                </Center>
                <Center >
                    <PolioSymptomOptions symptom="Pain in Arms or Legs?" />
                </Center>
                <Center >
                    <PolioSymptomOptions symptom="Does anyone around child have polio?" />
                </Center>
                <Center style={{marginTop:10,marginBottom:10}}>
                    From how many days your children is having above symptoms?
                </Center>
                <Center style={{ marginTop: -20 }}>
                    <PolioSymptomOptions symptom="Days of Symptom" textField="true"
                    />
                </Center>
                <Center style={{ marginTop: 40, marginBottom: 20 }}>
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
                        displayText={confirmPolio ? "Child may have polio symptoms! Please consult doctor for proper examination" :
                            "Child don't have polio symptoms!"}
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

})
export default CheckPolioSymptoms
