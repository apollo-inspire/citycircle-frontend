import { View, Text } from 'react-native'
import React from 'react'

const PlaceCard = ({ place: { id, title } }) => {
  return (
    <View className="flex-col items-center px-4 mb-14">
      <Text className="text-2xl text-white">{title}</Text>
      <Text className="text-2xl text-white">{id}</Text>
    </View>
  )
}

export default PlaceCard