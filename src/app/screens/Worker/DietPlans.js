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
        <Center flex={1} px="3" flexDir="column"
            alignSelf="center"
            position="absolute"
            top={10}
        >
            <HStack >
                <View >
                    <Avatar.Icon {...props} icon={() => (
                        <Image
                            alt="Hello"
                            source={require('../../assets/dietplan.png')}
                            style={{ width: "100%", height: "100%", borderRadius: 20 }}
                        />
                    )} size={100} />
                </View>
            </HStack>
            <HStack style={{ marginTop: 10 }}>
                <Heading >
                    Diet Plan for Your Child
                </Heading>
            </HStack>
            <HStack style={{ marginTop: 10,
            padding: 13
            }}>
                <Text style={{ fontSize: 16,
                textAlign: 'justify' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor condimentum lacinia quis vel eros donec ac odio tempor. Diam vel quam elementum pulvinar etiam. Convallis a cras semper auctor neque vitae tempus. Quam viverra orci sagittis eu volutpat. Nisi lacus sed viverra tellus in. Sagittis purus sit amet volutpat. Condimentum id venenatis a condimentum. Sapien eget mi proin sed libero enim sed faucibus. Euismod in pellentesque massa placerat duis. Vitae congue mauris rhoncus aenean vel elit scelerisque. Elementum pulvinar etiam non quam lacus suspendisse faucibus. Quis enim lobortis scelerisque fermentum dui. Congue eu consequat ac felis donec et. Purus faucibus ornare suspendisse sed nisi lacus sed.
                </Text>
            </HStack>
            <HStack style={{ marginTop: 10 }}>
                <Button size="lg" backgroundColor = "#0Cb8B6"
                onPress = {props.hideDietPlans}
                >
                    Hide
                </Button>
            </HStack>
        </Center>
    )
}

export default DietPlans
