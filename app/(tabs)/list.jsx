import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchInput from '../../components/SearchInput'
import PlaceCard from '../../components/PlaceCard'

const List = () => {
  return (
    <SafeAreaView className="bg-primary">
      <FlatList
        data={[{ id: 1, title: "test 1" }, { id: 2, title: "test 2"  }, { id: 3, title: "test 3" },]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
           <PlaceCard place={item}/>
        )}
        ListHeaderComponent={() => (
          <View>
            <View className="my-6 px-4 space-y-6">
            </View>
            <SearchInput placeholder="Search for a place"/>

            <View className="w-full flex-1 pt-5 pb-8">
                <Text className="text-gray-50 text-lg font-regular mb-3"> 
                  Places
                </Text>
            </View>
          </View>
          
        )}
      />
      {/* <Text>List</Text> */}
      



    </SafeAreaView>
  )
}

export default List