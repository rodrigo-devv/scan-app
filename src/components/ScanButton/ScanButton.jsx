import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

export function ScanButton(props) {
    return (
        <View>
            <TouchableOpacity
                onPress={props.onPress}
                className="bg-green-700	
                w-20 h-20 
                rounded-full 
                justify-center 
                items-center 
                shadow
                "
            >
                <MaterialIcons
                    name='qr-code-scanner'
                    size={50}
                    color='#FFF'
                    style={{ justifyContent: 'center' }}

                />
            </TouchableOpacity>
        </View>
    )
}
