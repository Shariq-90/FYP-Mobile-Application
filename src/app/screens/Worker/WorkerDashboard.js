import React, { useState, useEffect } from 'react'
import { View, Modal, StyleSheet,Alert, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import ChildDetails from '../Parent/ChildrenInformation/ChildDetails';
import ChildrenInfoModal from '../Parent/ChildrenInformation/ChildrenInfoModal';
import { Avatar, Button, Card, Title, Text } from 'react-native-paper';
import UpdateVaccinationDetails from './UpdateVaccinationDetails.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import axios from 'axios';
import baseUrl from '../../baseUrl';
function WorkerDashboard() {
  const child_details = (name, dob) => {
    return (
      <View>
        <Text style={styles.subtitle}>Parent Name: {name}</Text>
        {/* <Text style={styles.subtitle}>DOB: {dob}</Text> */}
      </View>
    )
  }
  const [childrens, setchildrens] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [childid, setchildid] = useState(0);
  const closeModal = () => {
    setModalVisible(false);
  }
  const getChildList = ()=>{
    axios.put(baseUrl + "/polioworker/children").
    then(function(response){
      console.log("Response: "+ JSON.stringify(response.data.data[3].childID))
      console.log("Response: "+ JSON.stringify(response.data.data[3].parentName))
      let temp_arr = [];
      temp_arr.push(response.data.data);
      setchildrens(temp_arr)
    }).catch(function(error){
      console.log("Error: "+ JSON.stringify(error))
    })
  }
  const LeftContent = props => <Avatar.Icon {...props} icon={() => (
    <Image
      source={require('../../assets/images/baby.png')}
      style={{ width: 55, height: 55, borderRadius: 20 }}
    />
  )} size={40} />

  useEffect(()=>{
    getChildList();
  },[])
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style = {styles.searchIcon}>
          <Input
            placeholder='Search Child Id'
            rightIcon={
              <Icon
                name='search'
                size={20}
                color='black'
              />
            }
          />
        </View>
        <View style={{
          flex: 1,
          alignItems: 'center',
        }}>
          <Text style={{
            fontSize: 30,
            fontWeight: 'bold'
          }}>Children Information</Text>
        </View>
        <View style={{
          padding: 20
        }}>
          {/* {ChildDetails.map((u, i) => {
            return (
              <Card key={u.id} id={u.id} onPress={() => {
                setchildid(u.id);
                setModalVisible(true);
              }} style={{
                marginBottom: 16,
                borderRadius: 30,
                borderWidth: 1,
                borderColor: 'black',
              }}>
                <Card.Title title={u.name}
                  // subtitleStyle={{ marginBottom: 2 }}
                  subtitle={child_details(u.parentName,
                    u.dateOfBirth)}
                  left={LeftContent} />
              </Card>

            );
          })} */}
          {childrens ? 
          childrens[0].map((u, i) => {
            return (
              <Card key={i} id={i} onPress={() => {
                setchildid(u.childID);
                // setModalVisible(true);
              }} style={{
                marginBottom: 16,
                borderRadius: 30,
                borderWidth: 1,
                borderColor: 'black',
              }}>
                <Card.Title title={u.childID}
                  // subtitleStyle={{ marginBottom: 2 }}
                  subtitle={child_details(u.parentName,
                    u.dateOfBirth)}
                  left={LeftContent} />
              </Card>

            );
          })
          : <Text>Loading</Text>}
        </View>
        <Modal
          animationType="slide"
          visible={modalVisible}
          // transparent={true}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <UpdateVaccinationDetails childid={childid}
            closeModal={closeModal}
          />
        </Modal>
      </View>
    </ScrollView >
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  searchIcon:{
      flex: 1,
      flexDirection:'row',
      alignSelf:'flex-end'
  },
  ChildrensList: {
    marginTop: 30,
  },
  subtitle: {
    fontSize: 15,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  cardstyles: {
    flex: 1,
    flexDirection: 'row',
    padding: 30,
    borderColor: 'black',
  },
  displaypicture: {
    alignItems: 'flex-start'
  },
  childid: {
    // marginTop: Platform.OS === 'ios' ? 0 : -12,
    color: 'black',
    fontSize: 20,
    alignSelf: 'center',
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