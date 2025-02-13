import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";

const FormField = ({
  title,
  placeholder,
  value,
  handleChangeText,
  otherStyle,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <View className={`space-y-2 ${otherStyle}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary-200 items-center flex-row">
        <TextInput 
        className="flex-1 text-white text-base font-psemibold"
        placeholder={placeholder}
        placeholderTextColor="#7b7b8b"
        value={value}
        onChangeText={handleChangeText}
        secureTextEntry={title === "Password" && !showPassword}
        />
        {
          title === "Password" &&
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image 
            source={!showPassword ? icons.eye : icons.eyeHide}
            className="h-6 w-6"
            resizeMode="contain"
            />
          </TouchableOpacity>
        }
      </View>
    </View>
  );
};

export default FormField;
