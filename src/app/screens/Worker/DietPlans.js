import { View, Image, ScrollView, StyleSheet } from 'native-base'
import React from 'react'
import { Avatar } from 'react-native-paper';
import {
    HStack,
    Center,
    Heading, Text, Button
} from "native-base"
function DietPlans(props) {
    return (
        <ScrollView>
            <HStack >
                <View style={{
                    marginTop: 60,
                    flex: 1,
                    alignItems: 'center'
                }}>
                    <Avatar.Icon {...props} icon={() => (
                        <Image
                            alt="Hello"
                            source={require('../../assets/dietplan.png')}
                            style={{ width: "100%", height: "100%", borderRadius: 20 }}
                        />
                    )} size={100} />
                </View>
            </HStack>
            <HStack style={{
                marginTop: 10,
                alignSelf: 'center'
            }}>
                <Heading >
                    Diet Plans for Your Child
                </Heading>
            </HStack>
            <HStack style={{
                marginTop: 40,
                alignSelf: 'center'
            }}>
                <Heading >
                    For Mental Growth
                </Heading>
            </HStack>
            <HStack style={{
                marginTop: 10,
                alignSelf: 'center',
                padding: 13,
            }}>
                <Text style={{
                    fontSize: 16,
                    textAlign: 'justify'
                }}>
                    {props.mental}
                </Text>
            </HStack>
            <HStack style={{
                marginTop: 10,
                alignSelf: 'center'
            }}>
                <Heading >
                    For Physical Growth
                </Heading>
            </HStack>
            <HStack style={{
                marginTop: 10,
                padding: 13,
                alignSelf: 'center'
            }}>
                <Text style={{
                    fontSize: 16,
                    textAlign: 'justify'
                }}>
                    {props.physical}
                </Text>
            </HStack>
            <HStack style={{
                marginTop: 10,
                alignSelf: 'center',
                marginBottom:30
            }}>
                <Button size="lg" backgroundColor="#0Cb8B6"
                        onPress={props.hideDietPlans}
                >
                    Hide
                </Button>
            </HStack>
        </ScrollView>
    )
}

export default DietPlans
