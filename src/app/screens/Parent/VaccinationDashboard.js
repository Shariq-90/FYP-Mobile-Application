import React, { useState } from 'react'
import {
    Title,
    Caption,
    Text
} from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Share from 'react-native-share';
import { Animated, View, SafeAreaView, StyleSheet, TouchableOpacity, StatusBar, Modal } from 'react-native'
import VaccinationDetails from './VaccinationDetails';
import VaccinationModal from './VaccinationModal';
// import Animated, { color } from 'react-native-reanimated';

function VaccinationDashboard() {
    const [visible, setVisible] = useState(false)
    const [displayid, setid] = useState(0);
    const hideModal = () => {
        setVisible(false);
    }
    const scrollY = React.useRef(new Animated.Value(0)).current;
    const SPACING = 20;
    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <Animated.FlatList
                data={VaccinationDetails}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: true }
                )}
                keyExtractor={item => item.id}
                contentContainerStyle={{
                    padding: SPACING,
                    paddingTop: StatusBar.currentHeight || 42
                }}
                renderItem={({ item, index }) => {
                    return <View
                        style={{
                            padding: SPACING,
                            flexDirection: 'row',
                            marginBottom: SPACING,
                            backgroundColor: '#0Cb8B6',
                            borderRadius: 16,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 10
                            },
                            shadowOpacity: .3,
                            shadowRadius: 20
                        }}
                    >
                        <View style={{ flex: 0.5 }}>
                            <Text style={{
                                fontSize: 20, fontWeight: '700'
                            }}>{item.name}</Text>
                        </View>
                        <View style={{ flex: 0.5 }}>
                            <TouchableOpacity onPress={() => {
                                setVisible(true)
                                setid(index);
                            }
                            }>
                                <Text style={{
                                    fontSize: 16, fontWeight: '700',
                                    textAlign: 'right'
                                }}>Available Vaccines</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                }}
            />
            <Modal animationType="slide"
                visible={visible}
                transparent={true}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}>
                <VaccinationModal hideModal={hideModal} displayid = {displayid}/>
            </Modal>
        </View>
    )
}

export default VaccinationDashboard


const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    userInfoSection: {
        paddingHorizontal: 10,
        flex: 0.3,
        marginTop: 80
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    closeButton: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    infoStyling: {
        fontSize: 18
    },
    linearGradient: {
        flex: 1,
        width: '100%',
    },
})
