import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '../constants/images'
import CustomButton from '../components/CustomButton'
import { StatusBar } from 'expo-status-bar'

const App = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{height:"100%"}}>
        <View className="w-full items-center justify-center h-full px-4">
          <Image source={images.logo} className="w-[134px] h-[84px]" resizeMode='contain' />
          <Image source={images.cards} className="w-m-[380px] w-full h-[300px]" resizeMode='contain' />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-pbold text-center z-10">Discover Endless Possibilities With <Text className="text-secondary-200">Aora</Text></Text>
          <Image source={images.path} className="w-[136px] h-[15px] absolute -bottom-0.5 -right-7" resizeMode='contain' />
          </View>
          <Text className='mt-7 text-gray-100 text-sm font-pregular text-center'>Where creativity meets innovation: embark on a journey of limitless exploration with Aora</Text>
          <CustomButton title={"Continue With Email"} handlePress={() => router.push('/sign-in')} containerStyle={"w-full mt-7"} />
            <StatusBar backgroundColor='#161622' style='light' />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})