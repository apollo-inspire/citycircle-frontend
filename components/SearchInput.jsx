import { TextInput, TouchableOpacity, View, Text, Image } from "react-native"
import { icons } from '../constants'
import { useState } from "react"


const SearchInput = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
    const [showPassword, setShowPassword] = useState(false)

    return ( 
        <View className="border-2 border-black-200 w-full h-16 px-4 mb-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row space-x-4">
            <TextInput
                className="text-base mt-0.5 text-white flex-1 font-regular"
                value={value}
                placeholder={placeholder}    
                placeholderTextColor="#7b7b8b"
                onChangeText={handleChangeText}
                secureTextEntry={title === 'Password' && !showPassword}
            />

                <TouchableOpacity>
                    <Image
                        source={icons.search}
                        className="w-5 h-5"
                        resizeMode="contain"
                    ></Image>
                </TouchableOpacity>
            </View>
    )
}


export default SearchInput