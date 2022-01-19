import React from 'react'
import { View, SafeAreaView, StyleSheet } from 'react-native'
import {
    Avatar,
    Title,
    Caption,
    Text,
    TouchableRipple
} from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from '../../styles/style';
function ParentProfile() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.userInfoSection}>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 15
                }}>
                    <View>
                        <Avatar.Image
                            source={require('../../assets/Avatar.jpg')}
                            size={80}
                        />
                    </View>
                    <View>
                        <Title style={[styles.title, {
                            marginTop: 15,
                            marginBottom: 5
                        }]}>Shariq Ahmed</Title>
                        <Caption style={styles.caption}>Bj_doe</Caption>
                    </View>
                </View>
            </View>
            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                    <Icon name="map-marker-radius" color="#777777" />
                    <Text>Islamabad, Pakistan</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
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
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuWrapper: {
        marginTop: 10,
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    },
});



export default ParentProfile
