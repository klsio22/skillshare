import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import BackgroundBlue from '../assets/svg/background-blue.svg';
import { Linking } from 'react-native';

export function EnterpriseLanding() {
  const { navigate } = useNavigation();

  return (
   <View className='flex items-center justify-center h-full flex-1 bg-sky-500 px-8 pt-14 '>
      <BackgroundBlue width='310'/>

      <Text className='text-white my-4 w-52 text-xl leading-8'>
         <Text className='font-ArchivoBold'>Quer ser um parceiro SkillShare?</Text>
      </Text>

      <TouchableOpacity activeOpacity={0.7}
        className='flex-row h-11 bg-red-500 px-11 border border-red-600 rounded-lg items-center'
        onPress={() => navigate('home')} >
        <Text className='text-white ml-3 font-PoppinsRegular text-base'>
         Ser parceiro
        </Text>
      </TouchableOpacity>
   </View>
  )
}