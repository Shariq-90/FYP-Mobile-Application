import React, { useContext, useState } from 'react';
import { Alert, Text, TextInput, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { styles } from '../../styles/style';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import baseUrl from "../../baseUrl";
import { PolioContext } from '../../../../Provider';
export default function WorkerSignIn({ navigation, route }) {
  const [LoginDetails, setLoginDetails] = useState({ email: null, password: null })
  let { email, password } = LoginDetails;
  const { setWorkerAddress } = useContext(PolioContext);
  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  const WorkerLogin = () => {
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
        else {
          alert("Please enter a valid email!")
        }
      }
      catch (Err) {
        alert("Please enter valid credentials!")
      }
    }
    else {
      Alert.alert("SignIn", "Please enter a valid email address!")
    }

  }
  return (
    <ScrollView>
      <View style={[styles.container, {
        backgroundColor: 'white',
        height: 700
      }]}>
        <View style={styles.parentLoginLogoView}>
          <Image style={styles.parentLogoImage} source={require("../../assets/logo.png")} />
        </View>
        <View style={[styles.formsFieldsSection, {
          position: 'absolute',
          top: "25%"
        }]}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              value={email}
              placeholder="Email Address"
              placeholderTextColor="#00000087"
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
              value={password}
              placeholder="Password"
              placeholderTextColor="#00000087"
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
        <View style={[styles.button_section, {
          position: 'absolute',
          top: '55%'
        }]}>
          <View style={{ marginBottom: 13 }}>
            <TouchableOpacity
              onPress={WorkerLogin} style={styles.buttonSubmit}>
              <Text style={styles.buttonTextSubmit}>Login</Text>
            </TouchableOpacity>
          </View>
          {/* <View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('SignUp')} style={styles.buttonSubmit}>
              <Text style={styles.buttonTextSubmit}>Sign Up</Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </View>
    </ScrollView>
  )
}

