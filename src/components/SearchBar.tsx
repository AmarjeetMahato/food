import {  Text, TextInput, View } from 'react-native'
import React from 'react'
import { AntDesign, Feather } from '@expo/vector-icons'

const SearchBar = () => {
  return (
    <View className=' flex-row  items-center space-x-2 px-4 py-2 bg-gray-200 mx-4 my-2 rounded-2xl' >
       <Feather name="search" size={20} color="gray" />
       <TextInput placeholder='Search food..' className=' flex-1 ml-2' />
       <AntDesign name="audio" size={20} color="#dc143c" />
    </View>
  )
}

export default SearchBar
