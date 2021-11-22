import React, { useState } from 'react'
import { View, Text, StyleSheet, Modal, Alert } from 'react-native'
import { Radio, Heading, HStack, Center, Button, Stack, Flex, ScrollView } from 'native-base';
import ChildGrowthSymptoms from './ChildrenInformation/ChildGrowthSymptoms';
import { TextInput } from 'react-native-paper';
import GraphModal from './ChildrenInformation/GraphModal';
import { Rating, AirbnbRating } from 'react-native-elements';
import ChildGrowthQuestions from '../../../ChildGrowthQuestions';
function CheckChildGrowth() {
    const [modalVisible, setModalVisible] = useState(false);

    const closeMenu = () => setModalVisible(false);
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
                <Center>
                    <View style={{ marginBottom: 30 , padding: 25}}>
                        <Heading textAlign="center"  size="lg">{ChildGrowthQuestions[0].key}</Heading>
                        <Heading textAlign="center" mt = "5" size="md">{ChildGrowthQuestions[0].question}</Heading>
                        {ChildGrowthQuestions[0].subquestions.map((data, index) => {
                            return (
                                <View style = {{marginTop: 5, flexDirection: 'row', alignSelf :'center'}}>
                                    <Heading key={index} textAlign="center" size="sm">{data}</Heading>
                                    <Rating
                                        count={5}
                                        // reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable", "Jesus"]}
                                        defaultRating={1}
                                        imageSize={20}
                                    />
                                </View>
                            )
                        })}

                    </View>
                </Center>
                <Center style={{
                    marginTop: -30
                }}>
                    <ChildGrowthSymptoms symptom="Weight" />
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Height" />
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Age" />
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Gross Motor" />
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Fine Motor" />
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Communication" />
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Emotional Development" />
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Attention and
                    Concentration" />
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Overactivity and Impulsivity" />
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Passivity/ Inactivity" />
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Planning/ Organising" />
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Perception of Directions" />
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Perception of Visual Forms
                     and Figures" />
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Memory" />
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Spoken Language" />
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Reading/Writing" />
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Social Skills" />
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Emotional Problems" />
                </Center>
                <Center >
                    <ChildGrowthSymptoms symptom="Problem Solving" />
                </Center>
                <Center style={{ marginTop: 40, marginBottom: 40 }}>
                    <Button key="lg" size="lg" onPress={() => {
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
                    <GraphModal closeMenu={closeMenu}
                        displayText="Your Child Growth is Normal!"
                    />
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
