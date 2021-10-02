import React, { useState } from 'react'
import {
    Flex,
    Center,
    ScrollView,
    VStack,
    Spacer, Radio, Text
} from "native-base"

function PolioSymptomOptions(props) {
    let [value, setValue] = useState("")
    return (
        <ScrollView>
            <Center mt="4">
                <VStack w="100%">
                    <Flex
                        direction="row"
                    >
                        <Center width="110">
                            <Text style = {{fontSize: 19}}>
                                {props.symptom}
                            </Text>
                        </Center>
                        <Spacer />
                        <Center >
                            <Radio.Group
                                name="myRadioGroup"
                                accessibilityLabel="favorite number"
                                value={value}
                                onChange={(nextValue) => {
                                    setValue(nextValue)
                                }}
                                style={{
                                    flexDirection: "row",

                                }}
                            >
                                <Radio value="yes" my={1}>
                                    Yes
                                </Radio>
                                <Radio value="no" my={1}
                                    style={{ marginLeft: 10 }}>
                                    No
                                </Radio>
                            </Radio.Group>
                        </Center>
                    </Flex>
                </VStack>
            </Center>
        </ScrollView>
    )
}

export default PolioSymptomOptions
