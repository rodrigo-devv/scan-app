import * as React from 'react'
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'

export default function MainDrawer(props) {
    return (
        <View className="flex-1">
            <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: '#E4F6E8' }}>
                <View className='m-4'>
                    <View className='flex-row items-center'>
                        <AntDesign name="scan1" size={50} color="#1d52a3" />
                        <Text className='text-xl font-bold pl-2 text-[#1d52a3]	'>Scan app</Text>
                    </View>
                    <Text className="text-lg ml-1">Rodrigo Oliveira</Text>
                </View>
                {/* Resposible to draw the list of routes */}
                <View className="flex-1 bg-white pt-5">
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            {/* Footer */}
            <View className="py-5 pl-2 border-t border-[#ccc]">
                <TouchableOpacity
                    onPress={() => { Alert.alert('Under construction') }}
                    className="px-3"
                >
                    <View className='flex-row'>
                        <MaterialIcons name="logout" size={24} />
                        <Text className='text-base ml-3'> Log-out </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}