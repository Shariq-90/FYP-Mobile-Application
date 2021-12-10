import React from 'react'
import { TextInput } from 'react-native'

function PhysicalTraits(props) {
    return (
        <TextInput
            keyboardType='numeric'
            style={{
                top: 1,
                height: 50,
                flex: 1,
                color: '#001027',
                textAlign: "left",
                width: 300,
                padding: 10,
                fontWeight: "bold",
                borderColor: 'black',
                borderWidth: 0.5,
                borderRadius: 5
            }
            }
            placeholder={props.symptom}
            placeholderTextColor="#00000087"
            value={props.trait}
            onChangeText={(val) => {
                props.setTrait(val)
            }}
        />
    )
}

export default PhysicalTraits
