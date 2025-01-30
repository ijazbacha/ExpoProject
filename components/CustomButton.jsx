import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress, containerStyle, textStyle, isLoading}) => {
  return (
    <TouchableOpacity 
    onPress={handlePress}
    activeOpacity={0.7}
    disabled={isLoading}
    className={`bg-secondary min-h-[62px] justify-center items-center rounded-xl ${containerStyle} ${isLoading ? "opacity-50" : ""}`}
    >
      <Text className={`text-primary text-lg font-psemibold ${textStyle}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton