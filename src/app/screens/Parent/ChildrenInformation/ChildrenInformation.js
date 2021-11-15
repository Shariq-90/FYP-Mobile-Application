import React, { useState } from 'react'
import { View, Text, Modal, StyleSheet, Image, Alert } from 'react-native'
import { Avatar, Card} from 'react-native-paper';
// import { ListItem, Icon } from 'react-native-elements'
import ChildDetails from './ChildDetails';
import ChildrenInfoModal from './ChildrenInfoModal';

function ChildrenInformation(props, { navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [childid, setchildid] = useState(0);
    const closeModal = () => {
        setModalVisible(false);
    }
    const child_details = (name, dob) => {
        return (
            <View>
                <Text style={styles.subtitle}>Parent Name: {name}</Text>
                <Text style={styles.subtitle}>DOB: {dob}</Text>
            </View>
        )
    }
    const LeftContent = props => <Avatar.Icon {...props} icon={() => (
        <Image
            source={require('../../../assets/images/baby.png')}
            style={{ width: 55, height: 55, borderRadius: 20 }}
        />
    )} size={40} />
    return (
        <View>
            {ChildDetails.map((u, i) => {
                return (
                    <Card key={u.id} id={u.id} onPress={() => {
                        setchildid(u.id);
                        setModalVisible(true);
                    }} style={{
                        marginBottom: 16,
                        borderRadius: 30,
                        borderWidth: 1,
                        borderColor: 'black'
                    }}>
                        <Card.Title title={u.name}
                            // subtitleStyle={{ marginBottom: 2 }}
                            subtitle={child_details(u.parentName,
                                u.dateOfBirth)}
                                subtitleStyle = {{
                                    position: 'relative',
                                    top: 4
                                }}
                                left = {LeftContent}
                        />
                    </Card>

                );
            })}
            <Modal
                animationType="slide"
                visible={modalVisible}
                // transparent={true}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <ChildrenInfoModal childid={childid}
                    closeModal={closeModal}
                />
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    ChildName: {
        flexDirection: 'column',
        textAlign: 'center',
        marginTop: 20,
        width: 100,
        fontSize: 1,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 12,
    },
    ViewDetailsButton: {
        backgroundColor: '#0Cb8B6',
        width: 80,
        height: 80,
        justifyContent: 'center',
        borderRadius: 40,
        marginLeft: 20
    },
    tinyImage: {
        width: 100
    },
    Card: {
        borderRadius: 20,
    }

})

export default ChildrenInformation

