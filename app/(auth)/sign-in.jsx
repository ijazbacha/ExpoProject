import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isSubmiting, setIsSubmiting] = useState(false);

  const submit = () => {};

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[83vh] px-4 my-6">
          <Image
            source={images.logo}
            className="w-[115px] h-[35px]"
            resizeMode="contain"
          />
          <Text className="text-2xl text-white font-psemibold mt-10">
            Login in to Aora
          </Text>
          <FormField
            title="Email"
            // placeholder="Enter Email"
            value={form.email}
            handleChangeText={(val) => setForm({ ...form, email: val })}
            keyboardType="email-address"
            otherStyle="mt-7"
          />
          <FormField
            title="Password"
            // placeholder="Enter Password"
            value={form.password}
            handleChangeText={(val) => setForm({ ...form, password: val })}
            otherStyle="mt-7"
          />
          <CustomButton
            title={"Sign In"}
            handlePress={submit}
            isLoading={isSubmiting}
            containerStyle={"mt-7"}
          />
          <View className="flex-row justify-center mt-7 space-x-2">
            <Text className="text-gray-100 text-lg font-pregular">Dont have account?</Text>
            <Link href={"/sign-up"} className="text-secondary-100 text-lg font-psemibold">Sign UP</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
