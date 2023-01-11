import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'

export function InputComp({
    label, iconName, error, password, clearIcon, clearPress,
    onFocus = () => { },
    ...props
}: {
    label: string; iconName: any; error: string;
    password: boolean; clearIcon: any; clearPress: any; onFocus: any;
    placeholder: any; onChangeText:any, value: any
}) {
    const [hidePassword, setHidePassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    return (
        <View className="w-full mb-[20px]">
            <Text className="my-1 text-base">{label}</Text>
            <View
                className="py-[15px] px-[10] h-[55] bg-[#EEE] flex-row border-[1px] rounded-lg"
                style={[{
                    borderColor:
                        error ? '#F00' : isFocused ? '#00F' : '#BBB',
                    alignItems: 'center',
                },
                ]}>
                <Icon
                    name={iconName}
                    style={{ fontSize: 23, color: '#4CAF50', marginRight: 10 }}
                />
                <TextInput
                    className='font-[18] flex-1 text-[#000]'
                    secureTextEntry={hidePassword}
                    autoCorrect={false}
                    onFocus={() => {
                        onFocus();
                        setIsFocused(true);
                    }}
                    onBlur={() => setIsFocused(false)}
                    {...props} />
                {password && (
                    <Icon
                        onPress={() => setHidePassword(!hidePassword)}
                        name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
                        style={{ color: '#00F', fontSize: 22 }}
                    />
                )}
                {clearIcon && (
                    <TouchableOpacity onPress={clearPress}>
                        <Icon
                            name='close'
                            style={{ fontSize: 22, color: '#CD5C5C', marginLeft: 10 }}
                        />
                    </TouchableOpacity>)}

            </View>
            {error && (
                <Text style={{ marginTop: 7, color: '#F00', fontSize: 12 }}>
                    {error}
                </Text>
            )}
        </View>
    )
}
