import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { MainRoutes } from './main.routes';

export function Routes() {
    return(
        <NavigationContainer>
            <MainRoutes />
            <StatusBar style='auto' />
        </NavigationContainer>
    )
}