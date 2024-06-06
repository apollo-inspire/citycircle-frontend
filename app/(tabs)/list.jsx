import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchInput from '../../components/SearchInput'
import PlaceCard from '../../components/PlaceCard'

const List = () => {
  return (
    <SafeAreaView className="bg-primary">
      <FlatList
        className="mx-4"
        data={[{ key: 1, name: "Donner", type: "Bookstore", open: "Open", languages: "Dutch, English & Other", city: "Rotterdam", district: "Stadscentrum"}, 
        { key: 2, name: "Beest Boulders", type: "Bouldering", open: "Open", languages: "Dutch, English & Other", city: "Rotterdam", district: "Noord"}, 
        { key: 3, name: "Dutch Pinball Museum", type: "Pinball", open: "Wed. 16:00", languages: "Dutch, English & Other", city: "Rotterdam", district: "Delfshaven"}, 
        { key: 3, name: "Dutch Pinball Museum", type: "Pinball", open: "Wed. 16:00", languages: "Dutch, English & Other", city: "Rotterdam", district: "Delfshaven"},
        { key: 3, name: "Dutch Pinball Museum", type: "Pinball", open: "Wed. 16:00", languages: "Dutch, English & Other", city: "Rotterdam", district: "Delfshaven"},
        { key: 3, name: "Dutch Pinball Museum", type: "Pinball", open: "Wed. 16:00", languages: "Dutch, English & Other", city: "Rotterdam", district: "Delfshaven"},
        { key: 3, name: "Dutch Pinball Museum", type: "Pinball", open: "Wed. 16:00", languages: "Dutch, English & Other", city: "Rotterdam", district: "Delfshaven"}]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
           <PlaceCard place={item}/>
        )}
        ListHeaderComponent={() => (
          <View>
            <View className="">
            </View>
            <SearchInput placeholder="Search for a place"/>

            {/* <View className="w-full flex-1 pt-5 pb-8">
                <Text className="text-gray-50 text-lg font-regular mb-3"> 
                  Places
                </Text>
            </View> */}
          </View>
          
        )}
      />
      {/* <Text>List</Text> */}
      



    </SafeAreaView>
  )
}

export default List