import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { TouchableOpacity } from 'react-native-gesture-handler'
import VaccinationDetails from './VaccinationDetails'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
function VaccinationModal(props) {
    return (
        <View style={styles.ModalBackground}>
            <View style={styles.modalContainer}>
                <View style={{ alignItems: 'center' }}>
                    <View style={styles.header}>
                        <TouchableOpacity
                            onPress={props.hideModal}
                        >
                            <FontAwesome name="close" size={20} style={{
                                marginTop: 2
                            }} onPress={props.hideModal} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center',
                alignSelf: 'center'}}>
                        <View style={{ marginTop: -50 }}>
                            <Image
                                source={require('../../assets/injection.png')}
                                style={{
                                    height: 80, width: 80,
                                    marginVertical: 10
                                }}
                            />
                        </View>
                        <View style={{
                            flex: 0.5, justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 80
                        }}>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 30,
                                textAlign: 'center'
                            }}>{VaccinationDetails[props.displayid].name
                                }</Text>
                            <View style = {{marginTop: 4, alignItems: 'center'}}>
                                <Text style={styles.displayText}>Manufacturer: {VaccinationDetails[props.displayid].manufacturer
                                }</Text>
                                <Text style={styles.displayText}>Dose: {VaccinationDetails[props.displayid].quantity
                                }</Text>
                                <Text style={styles.displayText}>Country: {VaccinationDetails[props.displayid].country
                                }</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ModalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContainer: {
        width: '80%',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
        elevation: 20
    },
    header: {
        width: '100%',
        height: 40,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    displayText: {
        fontSize: 20
    }
})
export default VaccinationModal

