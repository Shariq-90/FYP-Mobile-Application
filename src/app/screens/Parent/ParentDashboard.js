import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import ChildrenInformation from './ChildrenInformation/ChildrenInformation';
import ChildrenDietPlan from './ChildrenDietPlan/ChildrenDietPlan';
import LinearGradient from 'react-native-linear-gradient';

function ParentDashboard() {
    const [buttondescription, setbuttondescription] = useState("View Details")
    return (
        <ScrollView style={styles.container}>
            <View style={styles.container}>
                <View style={{ marginTop: 18 }}>
                    <Text style={styles.textInput}></Text>
                </View>
                <View style={{ alignSelf: 'center',width:350 }}>
                    <ChildrenInformation buttondescription="View Details" />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    textInput: {
        // marginTop: Platform.OS === 'ios' ? 0 : -12,
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        width: '100%',
        height: 700,
    },
})

export default ParentDashboard
