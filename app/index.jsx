import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const App = () => {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>App</Text>
      <Link href={"/profile"}>Go to Profile</Link>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})