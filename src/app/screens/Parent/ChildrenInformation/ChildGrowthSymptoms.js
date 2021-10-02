import React, { useState } from 'react'
import {
    Flex,
    Center,
    ScrollView,
    VStack,
    Spacer, CheckIcon, Text, Select
} from "native-base"

function ChildGrowthSymptoms(props) {
    let [service, setService] = React.useState("")
    return (
        <ScrollView>
            <Center mt="4">
                <VStack w="100%">
                    <Flex
                        direction="row"
                    >
                        <Center width="110">
                            <Text style={{ fontSize: 17 }}>
                                {props.symptom}
                            </Text>
                        </Center>
                        <Spacer />
                        <Center >
                            <Select
                                selectedValue={service}
                                minWidth="200"
                                accessibilityLabel="Choose Service"
                                placeholder="Choose Service"
                                _selectedItem={{
                                    bg: "teal.600",
                                    endIcon: <CheckIcon size="5" />,
                                }}
                                mt={1}
                                onValueChange={(itemValue) => setService(itemValue)}
                            >
                                <Select.Item label="UX Research" value="ux" />
                                <Select.Item label="Web Development" value="web" />
                                <Select.Item label="Cross Platform Development" value="cross" />
                                <Select.Item label="UI Designing" value="ui" />
                                <Select.Item label="Backend Development" value="backend" />
                            </Select>
                        </Center>
                    </Flex>
                </VStack>
            </Center>
        </ScrollView>
    )
}

export default ChildGrowthSymptoms
