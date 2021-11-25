import React, { useState } from 'react'
import { StyleSheet, Image, View, Modal, TouchableOpacity, Alert } from 'react-native'
import {
  CheckIcon,
  HStack,
  Text,
  Center,
  NativeBaseProvider,
  Heading, Button
} from "native-base"
import { ActivityIndicator, Colors } from 'react-native-paper';
import { Avatar } from 'react-native-paper';
import DietPlans from '../../Worker/DietPlans';
const data = [{
  percentage: 8,
  color: 'tomato',
  max: 10
}, {
  percentage: 14,
  color: 'skyblue',
  max: 20
}, {
  percentage: 92,
  color: 'gold',
  max: 100
}, {
  percentage: 240,
  color: '#222',
  max: 500
}]
function GraphModal(props) {
  const [modalVisible, setModalVisible] = useState(false);

  const hideDietPlans = () => {
    setModalVisible(false);
  }
  return (
    //   <View style={{flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap', alignItems: 'center'}}>
    //   {data.map((p, i) => {
    //     return <Donut key={i} percentage={p.percentage} color={p.color} delay={500 + 100 * i} max={p.max}/>
    //   })}
    // </View>
    <Center flex={1} px="3" flexDir="column"
      alignSelf="center"
      position="absolute"
      top={20}>
      <HStack flexDir="column">
        <View style={{ marginBottom: 80 }}>
          <Avatar.Icon {...props} icon={() => (
            <Image
              source={require('../../../assets/childgrowth.jpg')}
              style={{ width: 90, height: 90, borderRadius: 20 }}
            />
          )} size={40} />
        </View>
      </HStack>
      <HStack flexDir="column" alignItems="flex-start">
        <Heading>
          Result
        </Heading>
      </HStack>
      <HStack space={2} top={10} width={300}>
        <Text color="emerald.500" fontSize="20" fontWeight="bold">
          {props.displayText}
        </Text>

      </HStack>
      {props.displayTextPhysical ?
        <HStack marginTop={20} width={300}>
          <Text color="emerald.500" fontSize="20" fontWeight="bold">
            {props.displayTextPhysical}
          </Text>
        </HStack> : <Text></Text>}
      {!props.polio ? <HStack justifyContent="center" marginTop={10}>
        <TouchableOpacity onPress={() => {
          setModalVisible(true);
        }}>
          <Text fontSize="18" underline={true}
          >
            Check out Diet Plan for your Child
          </Text>
        </TouchableOpacity>
      </HStack> : ""}
      <HStack style={{ marginTop: 50 }}>
        <Button size="lg" backgroundColor="#0Cb8B6"
          onPress={props.closeMenu}
        >
          Hide
        </Button>
      </HStack>
      <Modal
        animationType="slide"
        visible={modalVisible}
        // transparent={true}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <DietPlans hideDietPlans={hideDietPlans} />
      </Modal>
    </Center>
  )
}
const styles = StyleSheet.create({
  modal: {
    width: '80%',
    backgroundColor: 'red'
  }
})

export default GraphModal
