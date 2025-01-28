import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const App = () => {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>App</Text>
      <Link href={"/home"} className='text-secondary'>Go to Home</Link>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})