import { View, Text, Image, Platform } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import icons from "../../constants/icons";

const TabIcon = ({ name, icon, color, focused, size }) => {
  return (
    <View className={`items-center justify-center gap-2 w-20 mt-5`}>
      <Image source={icon} className={`w-6 h-6`} tintColor={color} resizeMode="contain" />
      <Text className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}>{name}</Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs screenOptions={{tabBarShowLabel:false, tabBarStyle:{ height: Platform.OS == 'ios' ? 80 : 70}}} >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                name="Home"
                icon={icons.home}
                color={color}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                name="Bookmark"
                icon={icons.bookmark}
                color={color}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused, size }) => (
              <TabIcon
                name="Profile"
                icon={icons.profile}
                color={color}
                size={size}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                name="Create"
                icon={icons.plus}
                color={color}
                focused={focused}
              />
            ),
          }}
        />
        
      </Tabs>
    </>
  );
};

export default TabsLayout;
