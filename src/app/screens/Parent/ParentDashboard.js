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
                    <Text style={styles.textInput}>Children Information</Text>
                </View>
                <View style={{ alignSelf: 'center' }}>
                    <ChildrenInformation buttondescription="View Details" />
                </View>
                <View style={{ marginTop: 25 }}>
                    <Text style={styles.textInput}>Children Diet Plan</Text>
                    <View style={{ alignSelf: 'center' }}>
                        <ChildrenInformation buttondescription="View Diet Plan" />
                    </View>
                </View>
            </View>
        </ScrollView>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
