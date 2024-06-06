import { View, Text } from 'react-native'
import React from 'react'

const PlaceCard = ({ place: { key, name, type, open, languages, city, district } }) => {
  return (
    <View className="flex-row justify-between items-center mb-4 bg-teal-700 py-2 px-4">
        {/* <Text className="text-2xl text-white">{key}</Text> */}
        <View className="flex-col h-14 space-y-1 justify-between">
            <Text className="text-lg font-semibold text-white">{name}</Text>
            <Text className="text-lg font-semibold text-white">{type}</Text>
        </View>
        <View className="flex-col items-end">
            <Text className="text-sm font-medium text-white">{open}</Text>
            <Text className="text-sm font-medium text-white">{languages}</Text>
            <Text className="text-sm font-medium text-white">{city}, {district}</Text>
        </View>
    </View>
  )
}

export default PlaceCard