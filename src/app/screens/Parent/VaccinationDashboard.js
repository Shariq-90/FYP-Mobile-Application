import React, { useState } from 'react'
import {
    Title,
    Caption,
    Text
} from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Share from 'react-native-share';
import { Animated, List, FlatList, View, SafeAreaView, StyleSheet, TouchableOpacity, StatusBar, Modal, ScrollView } from 'react-native'
import VaccinationDetails from './VaccinationDetails';
import VaccinationModal from './VaccinationModal';
import { ListItem, Avatar } from 'react-native-elements';
import ChildDetails from './ChildrenInformation/ChildDetails';
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
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: "#fff" }}>
                {
                    VaccinationDetails.map((l, i) => (
                        <ListItem key={i} bottomDivider
                            onPress={() => {
                                setid(l.id);
                                setVisible(true);
                            }}
                        >
                            <Avatar rounded source={require('../../assets/injection1.png')} />
                            <ListItem.Content>
                                <ListItem.Title
                                    style={{
                                        color: "black",
                                        fontSize: 18,
                                        fontWeight: '100'
                                    }}
                                >{l.name}</ListItem.Title>
                                <ListItem.Subtitle>Manufacturer: {l.manufacturer}</ListItem.Subtitle>

                            </ListItem.Content>
                            <ListItem.Chevron color="black"
                                onPress={() => {
                                    setid(l.id);
                                    setVisible(true);
                                }}
                            />
                        </ListItem>
                    ))
                }
                <Modal animationType="slide"
                    visible={visible}
                    transparent={true}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}>
                    <VaccinationModal hideModal={hideModal} displayid={displayid} />
                </Modal>
            </View>
        </ScrollView>
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
