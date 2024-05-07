import { StyleSheet, Text, TextInput, TouchableOpacity, View , Image} from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants';


const FormField = ({title , placeholder, value, handleChange }) => {
   const [show, setShow] = useState(false);
  return (
    <View className="gap-2 mt-3">
      <Text className=" text-gray-100 font-pmedium text-[15px]">{title}</Text>

      <View className=" w-full h-[60px] flex flex-row ">
      <TextInput className=" bg-[#1E1E2D] rounded-2xl text-xl text-white p-4 flex-1" 
      placeholder={placeholder}
      placeholderTextColor="gray" 
      textContentType={'password'}
      value={value}
      onChange={handleChange}
      secureTextEntry={title === 'Password' && !show}
       />

       {title === 'Password' && 
       (
        <TouchableOpacity onPress={() => {
            setShow(!show)
        }} className="absolute right-3 top-4">
            <Image
             source={!show ? icons.eye : icons.eyeHide}
             resizeMode='contain'
             className="w-6 h-6"
            />
        </TouchableOpacity>
       )
       }

      </View>

    </View>
  )
}

export default FormField

const styles = StyleSheet.create({})