import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export function SimpleButton(props) {
    return (
        <View>
            <TouchableOpacity
                className="rounded-full justify-center"
                onPress={props.onPress}
                style={props.styles}>
                {props.icon
                    ? (<View className="justify-center items-center">{props.icon}</View>)
                    : (<Text className="text-white text-center text-xl ">{props.btnText}</Text>)
                }
            </TouchableOpacity>
        </View>
    )
}