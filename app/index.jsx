import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { Link, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '../constants';
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%'}}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image 
            source={images.cards}
            className="max-w--[380px] w-full h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">Discover Endless Possibilities with <Text className="text-secondary-200">Aora</Text></Text>
          </View>

          <Text className="text-sm font-normal text-gray-50 mt-7 text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti consequatur officia rem nemo quas iure ex repellat architecto blanditiis perferendis dicta, exercitationem tenetur voluptas obcaecati vero corporis culpa itaque est.
          </Text>

          <CustomButton 
            title="Continue"
            handlePress={() => router.push('/map')}
            containerStyles='w-full mt-7'
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor='#042f2e' style="light"></StatusBar>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
