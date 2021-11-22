import React, { useState, useEffect } from 'react'
import { StyleSheet, ScrollView, Image, View, Modal, TouchableOpacity, Alert } from 'react-native'
import {
    CheckIcon,
    HStack,
    Text,
    Center,
    NativeBaseProvider,
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
        <Center flex={1} px="3" flexDir="column"
            alignSelf="center"
            position="absolute"
            top={20}>
            <HStack flexDir="column">
                <View style={{ marginBottom: 80 }}>
                    <Avatar.Icon {...props} icon={() => (
                        <Image
                            source={require('../../assets/childgrowth.jpg')}
                            style={{ width: 90, height: 90, borderRadius: 20 }}
                        />
                    )} size={40} />
                </View>
            </HStack>
            <HStack flexDir="column" alignItems="flex-start">
                <Heading>
                    Vaccination Schedule
                </Heading>
            </HStack>
            <HStack space={2} top={10}>
                <Text color="emerald.500" fontSize="25" fontWeight="bold">
                    {props.displayText}
                </Text>
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
                        {/* <VaccineScheduleOptions title="OPV0" done={
                            JSON.stringify(vaccinationdetails.vaccinationdetails.data
                            [0].vaccines.opv0.done)
                        } date={
                            JSON.stringify(vaccinationdetails.vaccinationdetails.data
                            [0].vaccines.opv0.date)
                        } />
                        <VaccineScheduleOptions title="OPV0" done={
                            JSON.stringify(vaccinationdetails.vaccinationdetails.data
                            [0].vaccines.opv0.done)
                        } date={
                            JSON.stringify(vaccinationdetails.vaccinationdetails.data
                            [0].vaccines.opv0.date)
                        } />
                        <VaccineScheduleOptions title="OPV0" done={
                            JSON.stringify(vaccinationdetails.vaccinationdetails.data
                            [0].vaccines.opv0.done)
                        } date={
                            JSON.stringify(vaccinationdetails.vaccinationdetails.data
                            [0].vaccines.opv0.date)
                        } />
                        <VaccineScheduleOptions title="OPV0" done={
                            JSON.stringify(vaccinationdetails.vaccinationdetails.data
                            [0].vaccines.opv0.done)
                        } date={
                            JSON.stringify(vaccinationdetails.vaccinationdetails.data
                            [0].vaccines.opv0.date)
                        } />
                        <VaccineScheduleOptions title="OPV0" done={
                            JSON.stringify(vaccinationdetails.vaccinationdetails.data
                            [0].vaccines.opv0.done)
                        } date={
                            JSON.stringify(vaccinationdetails.vaccinationdetails.data
                            [0].vaccines.opv0.date)
                        } />
                        <VaccineScheduleOptions title="OPV0" done={
                            JSON.stringify(vaccinationdetails.vaccinationdetails.data
                            [0].vaccines.opv0.done)
                        } date={
                            JSON.stringify(vaccinationdetails.vaccinationdetails.data
                            [0].vaccines.opv0.date)
                        } />
                        <VaccineScheduleOptions title="OPV0" done={
                            JSON.stringify(vaccinationdetails.vaccinationdetails.data
                            [0].vaccines.opv0.done)
                        } date={
                            JSON.stringify(vaccinationdetails.vaccinationdetails.data
                            [0].vaccines.opv0.date)
                        } />
                        <VaccineScheduleOptions title="OPV0" done={
                            JSON.stringify(vaccinationdetails.vaccinationdetails.data
                            [0].vaccines.opv0.done)
                        } date={
                            JSON.stringify(vaccinationdetails.vaccinationdetails.data
                            [0].vaccines.opv0.date)
                        } />
                        <VaccineScheduleOptions title="OPV0" done={
                            JSON.stringify(vaccinationdetails.vaccinationdetails.data
                            [0].vaccines.opv0.done)
                        } date={
                            JSON.stringify(vaccinationdetails.vaccinationdetails.data
                            [0].vaccines.opv0.date)
                        } /> */}

                        <DataTable.Pagination
                            page={page}
                            numberOfPages={3}
                            onPageChange={(page) => setPage(page)}
                            label="1-2 of 6"
                            optionsPerPage={optionsPerPage}
                            itemsPerPage={itemsPerPage}
                            setItemsPerPage={setItemsPerPage}
                            showFastPagination
                            optionsLabel={'Rows per page'}
                        />
                    </DataTable>
                </HStack>
                : <Text>...Loading</Text>}
            <HStack style={{ marginTop: 50 }}>
                <Button size="lg" backgroundColor="#0Cb8B6"
                    onPress={props.closeMenu}
                >
                    Hide
                </Button>
            </HStack>
        </Center>
    )
}
const styles = StyleSheet.create({
    modal: {
        width: '80%',
        backgroundColor: 'red'
    }
})

export default ShowVaccinationSchedule
