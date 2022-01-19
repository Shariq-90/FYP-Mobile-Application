import { View } from 'native-base';
import React from 'react'
import { DataTable } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
function VaccineScheduleOptions(props) {
    return (
        <DataTable.Row>
            <DataTable.Cell>{props.title}</DataTable.Cell>
            <DataTable.Cell >
                {props.done === "true" ?
                    <FontAwesome name="check" size={20} color={"green"} /> :
                    <FontAwesome name="times" size={20} color={"red"}
                    />}
            </DataTable.Cell>
            <DataTable.Cell >

                {props.date.toString().substring(1,11)}
            </DataTable.Cell>
        </DataTable.Row>
    )
}

export default VaccineScheduleOptions
