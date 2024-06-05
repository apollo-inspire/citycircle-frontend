import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchInput from '../../components/SearchInput'

const List = () => {
  return (
    <SafeAreaView className="bg-primary">
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 },]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
           <Text className="text-3xl text-white">{item.id}</Text>
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6"></View>
        )}
      >
      </FlatList>
      {/* <Text>List</Text> */}
      <SearchInput />
    </SafeAreaView>
  )
}

export default List