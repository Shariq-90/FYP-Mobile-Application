import React, { useState } from 'react';
import { Text, TextInput, View, Button, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import { styles } from '../styles/style';
import axios from 'axios';
import baseUrl from '../baseUrl';

export default function Login({ navigation}) {
  const [LoginDetails, setLoginDetails] = useState({ email: null, password: null })
  let { email, password } = LoginDetails;
  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  const parentLogin = () => {
    if (email && password) {
      try {
        if (validateEmail(email)) {
          axios.post(baseUrl + "/users/login", {
            username: email,
            password: password,
          }).then(function (response) {
            navigation.navigate("ParentDrawer");
            setLoginDetails({
              ...LoginDetails,
              email: null,
              password: null
            })
          }).catch(function (error) {
            Alert.alert("Sign In", "Please enter the correct credentials!");
          })
        }
        else{
          alert("Please enter a valid email!")
        }
      }
      catch (Err) {
        alert("Please enter valid credentials!")
      }
    }
    else {
      Alert.alert("Sign in", "Please enter valid credentials!")
    }

  }
  return (
    <ScrollView>
      <View style={[styles.container, {
        backgroundColor: '#fff',
        flex: 1,
        height: 800
      }]}>
        <View style={styles.parentLoginLogoView}>
          <Image style={styles.parentLogoImage} source={require("../assets/logo.png")} />
        </View>
        <View style={[styles.formsFieldsSection, {
          position: 'absolute',
          top: "20%"
        }]}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              value={email}
              placeholder="Email Address"
              placeholderTextColor="#a6a6a6"
              keyboardType='email-address'
              onChangeText={(e) => {
                setLoginDetails({
                  ...LoginDetails,
                  email: e
                })
              }}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password"
              value={password}
              placeholderTextColor="#a6a6a6"
              secureTextEntry={true}
              onChangeText={(e) => {
                setLoginDetails({
                  ...LoginDetails,
                  password: e
                })
              }}
            />
          </View>
        </View>
        <View style={[styles.button_section,
        {
          position: 'absolute',
          top: "45%"
        }]}>
          <View style={{ marginBottom: 13 }}>
            <TouchableOpacity
              onPress={parentLogin} style={styles.buttonSubmit}>
              <Text style={styles.buttonTextSubmit}>Login</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('SignUp')} style={styles.buttonSubmit}>
              <Text style={styles.buttonTextSubmit}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>

  )
}

