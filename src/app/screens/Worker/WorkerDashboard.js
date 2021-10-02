import React, { useState } from 'react'
import { View, Modal, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import ChildDetails from '../Parent/ChildrenInformation/ChildDetails';
import ChildrenInfoModal from '../Parent/ChildrenInformation/ChildrenInfoModal';

function WorkerDashboard() {
  const [modalVisible, setModalVisible] = useState(false);
  const [childid, setchildid] = useState(0);
  const closeModal = () => {
    setModalVisible(false);
  }
  return (
    <ScrollView>
      <View >
        <TextInput
          style={{ backgroundColor: '#f2f9fc', textAlign: 'center', fontWeight: 'bold', fontSize: 20, width: 200, borderRadius: 10, alignSelf: 'flex-end' }}
          placeholder='Search Child ID' placeholderTextColor="#00000087" />
        <View >
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 20, alignSelf: 'center', marginBottom: 8 }}>Child Information</Text>
            {ChildDetails.map(data => {
              return (
                <View key={data.id} style={{ flexDirection: 'row', marginTop: 16, alignItems: 'center', paddingHorizontal: 12 }}>
                  <TextInput
                    style={{ backgroundColor: '#eee', fontWeight: 'bold', fontSize: 16, width: 200, borderRadius: 10, paddingLeft: 15 }}
                    placeholder='Children Name' value={data.name} placeholderTextColor="#00000087" />
                  <TouchableOpacity style={{ backgroundColor: 'white' }}
                    onPress={() => {
                      setchildid(data.id);
                      setModalVisible(true);
                    }}
                  >
                    <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 10 }}>View Details</Text>
                  </TouchableOpacity>

                </View>
              )
            })}
            <Modal
              animationType="slide"
              visible={modalVisible}
              transparent={true}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <ChildrenInfoModal closeModal={closeModal}
                childid={childid}
              />
            </Modal>
          </View>
        </View>
      </View>
    </ScrollView >
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
    alignSelf: 'center'
  },
  searchFilterTextField: {
    backgroundColor: '#eee',
    fontWeight: 'bold',
    fontSize: 14,
    width: 300,
    borderRadius: 10,
    paddingLeft: 15,
    marginBottom: 10
  },
  linearGradient: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
})
export default WorkerDashboard;