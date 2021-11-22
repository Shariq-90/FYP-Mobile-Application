import { View } from 'native-base';
import React from 'react'
import {  DataTable} from 'react-native-paper';
function VaccineScheduleOptions(props) {
    return (
        <DataTable.Row>
            <DataTable.Cell>{props.title}</DataTable.Cell>
            <DataTable.Cell >
              {props.done}
            </DataTable.Cell>
            <DataTable.Cell >
                {props.date}
            </DataTable.Cell>
        </DataTable.Row>
    )
}

export default VaccineScheduleOptions
