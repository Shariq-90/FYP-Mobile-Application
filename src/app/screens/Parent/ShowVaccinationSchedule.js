import React, { useState, useEffect } from 'react'
import { StyleSheet, Image, View, Modal, TouchableOpacity, Alert } from 'react-native'
import {
    CheckIcon,
    HStack,
    Text,
    Center,
    NativeBaseProvider, ScrollView,
    Heading, Button
} from "native-base"
import { Avatar } from 'react-native-paper';
import { DataTable } from 'react-native-paper';
import axios from 'axios';
import VaccineScheduleOptions from './VaccineScheduleOptions';
const optionsPerPage = [2, 3, 4];
function ShowVaccinationSchedule(props) {

    const [modalVisible, setModalVisible] = useState(false);
    const hideSchedule = () => {
        setModalVisible(false);
    }
    const [vaccinationdetails, setvaccinationdetails] = useState(null)
    const getSchedule = () => {
        axios.get(baseUrl + "/parent/vaccineschedule/" +
            props.child_id
        ).then(function (response) {

            setvaccinationdetails({
                ...vaccinationdetails,
                vaccinationdetails: response.data
            })
        }).catch(function (error) {
            Alert.alert("")
        })
    }
    const [page, setPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(optionsPerPage[0]);

    useEffect(() => {
        getSchedule();
        setPage(0);
    }, [itemsPerPage]);
    return (
        // <Center flex={1} px="3" flexDir="column"
        //     alignSelf="center"
        //     position="absolute"
        //     top={20}>
        <ScrollView>
            <HStack flexDir="column">
                <View style={{
                    marginTop: 80,
                    marginBottom: 20, alignSelf: 'center'
                }}>
                    <Avatar.Icon {...props} icon={() => (
                        <Image
                            source={require('../../assets/childgrowth.jpg')}
                            style={{ width: 40, height: 40, borderRadius: 20 }}
                        />
                    )} size={40} />
                </View>
            </HStack>
            <HStack marginBottom="5" flexDir="column" alignItems="center">
                <Heading>
                    Vaccination Schedule
                </Heading>
            </HStack>

            {vaccinationdetails ?
                // <Text>{JSON.stringify(vaccinationdetails.vaccinationdetails.data
                // [0].vaccines.opv0.done)}
                // </Text>

                <HStack>
                    <DataTable>
                        <DataTable.Header>
                            <DataTable.Title>Vaccine</DataTable.Title>
                            <DataTable.Title >Done</DataTable.Title>
                            <DataTable.Title >Scheduled Date</DataTable.Title>
                        </DataTable.Header>

                        <VaccineScheduleOptions title="OPV0" done={
                            JSON.stringify(vaccinationdetails.vaccinationdetails.data
                            [0].vaccines.opv0.done)
                        } date={
                            JSON.stringify(vaccinationdetails.vaccinationdetails.data
                            [0].vaccines.opv0.date)
                        } />
                        <VaccineScheduleOptions title="OPV1" done={
                            JSON.stringify(vaccinationdetails.vaccinationdetails.data
                            [0].vaccines.opv1.done)
                        } date={
                            JSON.stringify(vaccinationdetails.vaccinationdetails.data
                            [0].vaccines.opv1.date)
                        } />
                        <VaccineScheduleOptions title="OPV2" done={
                            JSON.stringify(vaccinationdetails.vaccinationdetails.data
                            [0].vaccines.opv2.done)
                        } date={
                            JSON.stringify(vaccinationdetails.vaccinationdetails.data
                            [0].vaccines.opv2.date)
                        } />
                        <VaccineScheduleOptions title="OPV3" done={
                            JSON.stringify(vaccinationdetails.vaccinationdetails.data
                            [0].vaccines.opv3.done)
                        } date={
                            JSON.stringify(vaccinationdetails.vaccinationdetails.data
                            [0].vaccines.opv3.date)
                        } />
                        <VaccineScheduleOptions title="measles0" done={
                            JSON.stringify(vaccinationdetails.vaccinationdetails.data
                            [0].vaccines.measles0.done)
                        } date={
                            JSON.stringify(vaccinationdetails.vaccinationdetails.data
                            [0].vaccines.measles0.date)
                        } />
                        <VaccineScheduleOptions title="measles1" done={
                            JSON.stringify(vaccinationdetails.vaccinationdetails.data
                            [0].vaccines.measles1.done)
                        } date={
                            JSON.stringify(vaccinationdetails.vaccinationdetails.data
                            [0].vaccines.measles1.date)
                        } />
                        <VaccineScheduleOptions title="bcg" done={
                            JSON.stringify(vaccinationdetails.vaccinationdetails.data
                            [0].vaccines.bcg.done)
                        } date={
                            JSON.stringify(vaccinationdetails.vaccinationdetails.data
                            [0].vaccines.bcg.date)
                        } />
                        <VaccineScheduleOptions title="pentavalent0" done={
                            JSON.stringify(vaccinationdetails.vaccinationdetails.data
                            [0].vaccines.pentavalent0.done)
                        } date={
                            JSON.stringify(vaccinationdetails.vaccinationdetails.data
                            [0].vaccines.pentavalent0.date)
                        } />
                        <VaccineScheduleOptions title="pentavalent1" done={
                            JSON.stringify(vaccinationdetails.vaccinationdetails.data
                            [0].vaccines.pentavalent1.done)
                        } date={
                            JSON.stringify(vaccinationdetails.vaccinationdetails.data
                            [0].vaccines.pentavalent1.date)
                        } />
                        <VaccineScheduleOptions title="pentavalent2" done={
                            JSON.stringify(vaccinationdetails.vaccinationdetails.data
                            [0].vaccines.pentavalent2.done)
                        } date={
                            JSON.stringify(vaccinationdetails.vaccinationdetails.data
                            [0].vaccines.pentavalent2.date)
                        } />
                        <VaccineScheduleOptions title="pcv0" done={
                            JSON.stringify(vaccinationdetails.vaccinationdetails.data
                            [0].vaccines.pcv0.done)
                        } date={
                            JSON.stringify(vaccinationdetails.vaccinationdetails.data
                            [0].vaccines.pcv0.date)
                        } />
                        <VaccineScheduleOptions title="pcv1" done={
                            JSON.stringify(vaccinationdetails.vaccinationdetails.data
                            [0].vaccines.pcv1.done)
                        } date={
                            JSON.stringify(vaccinationdetails.vaccinationdetails.data
                            [0].vaccines.pcv1.date)
                        } />
                        <VaccineScheduleOptions title="pcv2" done={
                            JSON.stringify(vaccinationdetails.vaccinationdetails.data
                            [0].vaccines.pcv2.done)
                        } date={
                            JSON.stringify(vaccinationdetails.vaccinationdetails.data
                            [0].vaccines.pcv2.date)
                        } />
                    </DataTable>
                </HStack>
                : <Text>...Loading</Text>}

            <HStack style={{ marginTop: 50,
        marginBottom: 20    
        }}
                justifyContent="center"
            >
                <Button size="lg" backgroundColor="#0Cb8B6"
                    onPress={props.closeMenu}
                >
                    Hide
                </Button>
            </HStack>
        </ScrollView>
        // </Center>
    )
}
const styles = StyleSheet.create({
    modal: {
        width: '80%',
        backgroundColor: 'red'
    }
})

export default ShowVaccinationSchedule
