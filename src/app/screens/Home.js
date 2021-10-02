import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { styles } from '../styles/style';

export default function Home({ navigation }) {
  return (
    <View style={styles.homeScreen}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Details', { name: 'Omer' })
        }
        style={styles.roundButton}>
        <Text>I'm a button for Logging Into the portal.</Text>
      </TouchableOpacity>
      {/* <Button
        title="Go to profile"
        onPress={() =>
          navigation.navigate('Details', { name: 'Omer' })
        }
      /> */}
    </View>
  )
}


