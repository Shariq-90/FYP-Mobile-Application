import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, Text, View, Button, TouchableOpacity } from 'react-native';
import { styles } from '../styles/style';
import { Icon } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient';

export default function Splash({ navigation }) {
  return (
    <ScrollView>
      <View style={[styles.container,{
        backgroundColor: 'white',
        flex: 1,
        height: 800
      }]}>
        <View style={styles.top_container}>
          <View style={styles.roundButton}>
            <Text style={styles.welcomeSplashScreen}>Welcome Abroad!</Text>
            <Text style={styles.welcomeSubTitleSplashScreen}>In order to start kindly select one of the below.</Text>
          </View>
        </View>
        <View style={[styles.second_container,{
          position: 'absolute',
          top: "30%"
        }]}>
          <LinearGradient style={styles.home_triangleButtongradient} colors={['#0Cb8B6', '#0df2c9']}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Login', { name: 'Omer' })
              } style={styles.home_touchabletriangle}>
              <Icon
                raised
                name='users'
                type='font-awesome' style={{ textAlign: 'center' }} color='#517fa4' />
              <Text style={styles.home_triangleText}>
                Are you a Parent?</Text>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient style={styles.home_triangleButtongradient} colors={['#0Cb8B6', '#0df2c9']}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('WorkerSignIn', { name: 'Umar' })
              } style={styles.home_touchabletriangle}>
              <Icon
                raised
                name='user-md'
                type='font-awesome' style={{ textAlign: 'center' }} color='#517fa4' />
              <Text style={styles.home_triangleText}>Are you a Worker?</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </ScrollView>
  )
}


