import React, { useState } from 'react';
import { Alert, Text, TextInput, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { styles } from '../../styles/style';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import baseUrl from "../../baseUrl";
export default function WorkerSignIn({ navigation, route }) {
  const [LoginDetails, setLoginDetails] = useState({ email: null, password: null })
  let { email, password } = LoginDetails;

  const WorkerLogin = () => {
    if (email && password) {
      axios.post(baseUrl + "/users/login", {
        username: email,
        password: password,
      }).then(function (response) {
        Alert.alert("Sign In", "Login Successful!", [
          {
            text: "OK", onPress: () => {
              navigation.navigate("WorkerDrawer");
            }
          }
        ]);
      }).catch(function (error) {
        // handle error
        Alert.alert("Sign In", "Please enter the correct credentials! ");
      })
    } else {
      Alert.alert("SignIn", "Please fill all the details!")
    }
  }
  return (
    <ScrollView>
      <View style={[styles.container,{
        backgroundColor:'white',
        height: 700
      }]}>
        <View style={styles.parentLoginLogoView}>
          <Image style={styles.parentLogoImage} source={require("../../assets/logo.png")} />
        </View>
        <View style={[styles.formsFieldsSection,{
          position: 'absolute',
          top: "25%"
        }]}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
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
        <View style={[styles.button_section,{
          position: 'absolute',
          top: '55%'
        }]}>
          <View style={{ marginBottom: 13 }}>
            <TouchableOpacity
              onPress={WorkerLogin} style={styles.buttonSubmit}>
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

