import React, { useEffect, useState } from 'react'
import {
  Alert, View, Keyboard, Text,
  ActivityIndicator, StyleSheet, SafeAreaView
} from 'react-native'
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native'
import { ScanButton } from '../components/ScanButton/ScanButton';
import MyDropDown from '../components/DropDown/DropDown';
import { InputComp } from '../components/Input/InputComp';
import { SimpleButton } from '../components/SimpleButton/SimpleButton';


export function ReportScreen({ route }: { route: any }) {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [LastLocation, setLastLocation] = useState<any | null>(null);
  const [selectedDrop, setSelectedDrop] = useState(null);
  const [dataB, setData] = useState(route?.params?.data);
  const [inputs, setInputs] = useState({ code: '', obsEntry: '' });
  const [errors, setErrors] = useState({ code: '', dropdown: '', obsEntry: '' });

  useEffect(() => {
    (async function () {
      setLoading(true);
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return (
          <Text className='flex-1 justify-center items-center'>
            'Permission to access location was denied'
          </Text>)
      }
      let LocUpdate = await Location.getCurrentPositionAsync(
        { accuracy: Location.Accuracy.Low }
      )
      setLastLocation(LocUpdate.coords);
      setLoading(false);
    })();
    if (dataB != setData) {
      handleOnchange(route.params?.data, 'code')
      setData(undefined)
      handleError(null, 'code')
    } else {
      handleOnchange(dataB, 'code')
      handleError(null, 'code')
    }
  }, [route.params])


  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (inputs.code == '' || inputs.code == undefined) {
      handleError('Scan the QR or insert the code', 'code');
      isValid = false;
    }
    if (isValid) {
      setLoading(true);
      sendData();
      setTimeout(async () => {
        handleOnchange('', 'code')
        handleOnchange('', 'obsEntry')
        handleError(null, 'code')
        handleError(null, 'obsEntry')
        dataB && setData(null)
        setLoading(false);
      }, 200);
    }
  };

  const sendData = async function (): Promise<boolean> {
    Alert.alert('Working on it')
    try {
      return true
    } catch (error) {
      return false
    }
  }

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({ ...prevState, [input]: text }));
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({ ...prevState, [input]: error }));
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View
        style={{
          paddingTop: 50,
          paddingHorizontal: 20,
        }}>
        {loading
          ? <ActivityIndicator
            color='#000'
            size="large"
            style={styles.activityIndicator} />
          : null}
        <View style={{ marginVertical: 20 }}>
          <InputComp
            placeholder="ID - VIM" iconName="qrcode-scan" label="Code" password={false}
            onChangeText={text => handleOnchange(text, 'code')}
            clearPress={() => {
              handleOnchange('', 'code')
              handleError(null, 'code')
              dataB && setData(null)
            }}
            value={dataB ? dataB : inputs.code}
            onFocus={() => handleError(null, 'code')}
            error={errors.code}
            clearIcon={inputs.code ? true : false}
          />
          <MyDropDown
            onFocus={() => {}}
            label="Reason"
            iconName="playlist-check"
            onChange={item => {
              setSelectedDrop(item.label);
            }}
            error={errors.dropdown}
          />
          <InputComp
            placeholder="Issue" iconName="bug" label="Observation" password={false}
            onChangeText={text => handleOnchange(text, 'obsEntry')}
            value={inputs.obsEntry}
            onFocus={() => handleError(null, 'obsEntry')}
            clearPress={() => (handleOnchange('', 'obsEntry'))}
            clearIcon={inputs.obsEntry ? true : false}
            error={errors.obsEntry}
          />
        </View>
        <View
          className="h-16 items-center"
        >
          <SimpleButton
            className=""
            onPress={() => {
              validate()
            }}
            btnText="Submeter"
            styles={{
              // backgroundColor: 'rgba(82,82,91,0.7)',
              backgroundColor: 'rgba(82,82,91, 1)',
              width: 250,
              height: '100%'
            }}

          />
        </View>
      </View>

      <View style={{ position: 'absolute', bottom: '12%', alignSelf: 'center' }}>
        {inputs.code ?
          null :
          <ScanButton
            onPress={() => {
              navigation.navigate("ScanModal");
            }}
          />}

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 70
  },
  activityIndicator: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      height: 80
  }
})