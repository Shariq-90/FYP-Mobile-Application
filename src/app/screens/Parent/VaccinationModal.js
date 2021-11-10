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
                                marginTop: 2, alignSelf: 'flex-end'
                            }} onPress={props.hideModal} />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        alignItems: 'center',
                        alignSelf: 'center'
                    }}>
                        <View >
                            <Image
                                source={require('../../assets/injection.png')}
                                style={{
                                    height: 80, width: 80,
                                    marginVertical: 10
                                }}
                            />
                        </View>
                        <View style={{
                            flex: 1, justifyContent: 'center',
                            alignItems: 'center',
                            position:'absolute',
                            top: "110%"
                        }}>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 30,
                                textAlign: 'center'
                            }}>{VaccinationDetails[props.displayid].name
                                }</Text>
                            <View style={{ marginTop: 10, alignItems: 'center' ,
                        
                        }}>
                                <Text style={styles.displayText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi. Amet tellus cras adipiscing enim eu turpis egestas pretium. Natoque penatibus et magnis dis parturient. Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Sed tempus urna et pharetra pharetra. Lectus vestibulum mattis ullamcorper velit sed. Ipsum nunc aliquet bibendum enim facilisis gravida neque. Morbi tincidunt ornare massa eget. Dolor morbi non arcu risus quis varius quam. Sed pulvinar proin gravida hendrerit lectus a. Vivamus arcu felis bibendum ut tristique et egestas quis ipsum. Tempor orci eu lobortis elementum nibh tellus molestie.</Text>

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
        width: '90%',
        height: "100%",
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
        elevation: 20
    },
    header: {
        width: '100%',
        height: 20,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    displayText: {
        fontSize: 16,
        textAlign: 'justify'
    }
})
export default VaccinationModal

