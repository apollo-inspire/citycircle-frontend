import React, { useRef } from 'react';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { Alert, StyleSheet, Touchable, TouchableOpacity, View, Text } from 'react-native';
import { markers } from '../../assets/data/markers';


const INITIAL_REGION = {
  latitude: 51.9170825,
  longitude: 4.4774525,
  latitudeDelta: 0.1,
  longitudeDelta: 0.1
}

const onMarkerSelected = (marker: any) => {
  Alert.alert(marker.name);
};

const calloutPressed = (ev: any) => {
  console.log(ev);
};


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
      >
        {markers.map((marker, index) => (
        <Marker
          key={index}
          title={marker.name}
          coordinate={marker}
          onPress={() => onMarkerSelected(marker)}
        >
          <Callout onPress={calloutPressed}>
            <View style={{ padding: 10 }}>
              <Text style={{ fontSize: 24 }}>Hello</Text>
            </View>
          </Callout>
        </Marker>
				))}
      </MapView>
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
