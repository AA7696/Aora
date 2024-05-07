import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { images } from '../../constants';
import FormField from '../../components/FormField';
import CoustomButton from '../../components/CoustomButton';
import { Link, Redirect, router } from 'expo-router';

const signIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  })
  return (
    <SafeAreaView className=" bg-primary h-full">
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View className="w-full h-full p-4">
          <Image
            source={images.logo} 
            className=" w-[130px] p-[40px]"
            resizeMode='contain' 
          />

          <Text className=" text-white text-xl font-psemibold">
            Sign In
          </Text>
          <View className=" mt-5 w-full min-h-fit">
            <FormField title="Email"  placeholder="abc@gmail.com" secureText= "false" value={form.email}
            handleChange={(e) => setForm({...form, email: e })}
            />
            <FormField title="Password"  placeholder="*****" secureText= "true" value={form.password}
            handleChange={(e) => setForm({...form, password: e })}
            />
            <CoustomButton
            containerStyles="w-full mt-9"
            title="Log In"
             />
          </View>

          <Text  className=" text-base font-pmedium text-gray-100 mt-7 text-center">Don't have an account?{' '} 
          <Text  className="text-secondary-200"><Link href='/sign-up'>SignUp</Link></Text></Text>
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  )

}

export default signIn

const styles = StyleSheet.create({})