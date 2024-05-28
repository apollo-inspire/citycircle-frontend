import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router';

import { icons } from '../../constants';

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image 
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text className={`${focused ? 'font-bold' : 'font-normal'}`}>
        {name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
        <Tabs
          screenOptions={{
            tabBarShowLabel: false
          }}
        >
          <Tabs.Screen
              name="list"
              options={{
                title: "List",
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                  <TabIcon 
                    icon={icons.bookmark}
                    color={color}
                    name="List"
                    focused={focused}
                  />
                )
              }}
          />
          <Tabs.Screen
              name="map"
              options={{
                title: "Map",
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                  <TabIcon 
                    icon={icons.home}
                    color={color}
                    name="Map"
                    focused={focused}
                  />
                )
              }}
          />
          <Tabs.Screen
              name="profile"
              options={{
                title: "Map",
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                  <TabIcon 
                    icon={icons.profile}
                    color={color}
                    name="Profile"
                    focused={focused}
                  />
                )
              }}
          />
        </Tabs>
    </>
  )
}

export default TabsLayout