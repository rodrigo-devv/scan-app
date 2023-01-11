import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Icon from '@expo/vector-icons/MaterialCommunityIcons'

const options = [
    { label: 'Ghost', value: '1' },
    { label: 'Repair', value: '2' },
    { label: 'Collect', value: '3' },
    { label: 'Safety Check', value: '4' },
    { label: 'Not Found', value: '5' },
    { label: 'Swap', value: '6' },
    { label: 'Rebalance', value: '7' },
    { label: 'IoT Error', value: '8' },

];


export default function DropDown({
    label, iconName, error, onChange,
    onFocus = () => { },
    ...props
}: { label: string; iconName: any; error: string; onFocus: any; onChange: any; }) {
    const [value, setValue] = useState(null);
    const [isFocused, setIsFocused] = useState(false);

    const renderItem = (item: any) => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.label}</Text>
                {item.value === value && (
                    <Icon
                        style={styles.icon}
                        color="black"
                        name="check"
                        size={20}
                    />
                )}
            </View>
        );
    };
    return (
        <View className="w-full mb-[20px]">
            <Text>
                <Text className="my-1 text-base">{label}</Text>
            </Text>
            <View className="border- rounded-lg">
                <Dropdown

                    style={[
                        styles.dropdownArea,
                        {
                            borderColor: error
                                ? '#F00'
                                : isFocused
                                    ? '#00F'
                                    : '#BBB',
                            alignItems: 'center',
                        },
                    ]}
                    onFocus={() => {
                        onFocus();
                        setIsFocused(true);
                    }}
                    onBlur={() => setIsFocused(false)}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={options}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="Select item"
                    searchPlaceholder="Search..."
                    value={value}
                    onChange={item => {
                        setValue(item.value);
                    }}
                    renderLeftIcon={() => (
                        <Icon style={styles.icon} color="#4CAF50" name={iconName} size={28} />
                    )}
                    renderItem={renderItem}
                    {...props}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    dropdownArea: {
        height: 55,
        backgroundColor: '#EEE',
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 8,
    },
    dropdown: {
    },
    icon: {
        marginRight: 10,
    },
    item: {
        padding: 17,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textItem: {
        flex: 1,
        fontSize: 16,
    },
    placeholderStyle: {
        fontSize: 18,
        color: '#AAAAAA'
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});