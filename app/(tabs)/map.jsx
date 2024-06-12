import React, { useRef } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Touchable, TouchableOpacity, View, Text } from 'react-native';

const INITIAL_REGION = {
  latitude: 51.9170825,
  longitude: 4.4774525,
  latitudeDelta: 0.1,
  longitudeDelta: 0.1
}

export default function App() {
  const mapRef = useRef();
  // const navigation = useNavigation();

  const focusMap = () => {
    const testPlace = {
      latitude: 51.91883331856713,
      longitude: 4.479443403439747,
      latitudeDelta: 0.002,
      longitudeDelta: 0.002
    }

    // mapRef.current?.setCamera(testPlace)
    mapRef.current?.animateToRegion(testPlace)
  };

  return (
    <View style={styles.container}>
      <MapView 
      // style={StyleSheet.absoluteFill} 
      style={styles.map}
      provider={PROVIDER_GOOGLE} 
      initialRegion={INITIAL_REGION}
      showsUserLocation
      showsMyLocationButton
      mapType="standard"
      // mapType="satellite"
      ref={mapRef}
      />
      <TouchableOpacity onPress={focusMap} className="p-4 bg-primary">
        <Text className="text-white font-bold">Test Place</Text>  
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '90%',
  },
});
