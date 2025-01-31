import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '../../constants/images'
import FormField from '../../components/FormField'

const SignIn = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">
          <Image source={images.logo} className="w-[115px] h-[35px]" resizeMode='contain' />
          <Text className="text-2xl text-white font-psemibold mt-10">Login in to Aora</Text>
          <FormField />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn