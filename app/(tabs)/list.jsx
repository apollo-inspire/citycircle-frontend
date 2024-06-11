import { View, FlatList, SafeAreaView } from 'react-native';
import React from 'react';
import SearchInput from '../../components/SearchInput';
import PlaceCard from '../../components/PlaceCard';
import placesData from '../../assets/data/places.json'; // Importing the JSON data

const List = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'blue' }}>
      <FlatList
        style={{ marginHorizontal: 8 }}
        data={placesData} // Using the imported JSON data
        keyExtractor={(item) => item.key.toString()}
        renderItem={({ item }) => (
          <PlaceCard place={item} />
        )}
        ListHeaderComponent={() => (
          <View>
            <View style={{ marginBottom: 10 }} />
            <SearchInput placeholder="Search for a place" />
            <View style={{ paddingTop: 5, paddingBottom: 8 }}>
              {/* Optional: You can add your header here */}
              {/* <Text style={{ color: 'white', fontSize: 20 }}>Places</Text> */}
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default List;
