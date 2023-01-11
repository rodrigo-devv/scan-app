import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import HomeScreen from '../screens/HomeScreen'
import DataScreen from '../screens/DataScreen'
import {ReportScreen} from '../screens/ReportScreen';
import ScanScreen from '../screens/ScanQr'
import ConfigScreen from '../screens/SettingsScreen'
import SettingsScreen from '../screens/SettingsScreen';
import MainDrawer from '../components/MainDrawer/MainDrawer';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function LeftDrawer() {
    return (
        <Drawer.Navigator drawerContent={props => <MainDrawer {...props} />}
            initialRouteName="Home"
            screenOptions={{ 
                headerTransparent: true,
                headerTitle: '',
                drawerType: 'front',
                drawerLabelStyle: {marginLeft: -25, fontSize: 15},
                drawerActiveBackgroundColor: '#E4F6E8',
                drawerActiveTintColor: '#0B0',
                drawerInactiveTintColor: '#333',
            }}>
            <Drawer.Screen name="Home" component={HomeTabs} options={{
                drawerIcon: ({ color }) => (
                    <MaterialIcons name="home" size={28} color={color} />
                )
            }} />
            <Drawer.Screen name="Data" component={DataScreen} options={{
                drawerIcon: ({ color }) => (
                    <MaterialIcons name="storage" size={28} color={color} />
                )
            }} />
            <Drawer.Screen name="Settings" component={SettingsScreen} options={{
                drawerIcon: ({ color }) => (
                    <MaterialIcons name="settings" size={28} color={color} />
                )
            }} />
            {/* <Drawer.Screen name="About" component={AboutScreen} options={{
                drawerIcon: ({ color }) => (
                    <MaterialIcons name="info" size={28} color={color} />
                )
            }} /> */}
        </Drawer.Navigator>
    )
}

function HomeTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveBackgroundColor: '#E4F6E8',
                tabBarActiveTintColor: '#0D0',
                tabBarInactiveTintColor: '#333',
                tabBarLabelStyle: {fontSize: 12, fontWeight: 'bold'},
                tabBarStyle: { 
                    borderTopWidth: 0,
                    position: 'absolute', 
                    backgroundColor: '#EEE', 
                    bottom: 10,
                    left: 10,
                    right: 10,
                    elevation: 0,
                    
                    height: 50,
                },
                headerShown: false,
            }}>
            <Tab.Group>
                <Tab.Screen
                    name="Main"
                    component={HomeScreen}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons
                                name='home'
                                size={size}
                                color={color}
                            />
                        )
                    }}
                />
                <Tab.Screen
                    name="ReportScreen"
                    component={ReportScreen}
                    options={{
                        tabBarLabel: 'Register',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons
                                name='barcode-scan'
                                size={size}
                                color={color}
                            />
                        )
                    }}
                />
            </Tab.Group>
        </Tab.Navigator>
    );
}

export function MainRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                orientation: 'portrait'
            }}>
            <Stack.Group>
                <Stack.Screen name="Main" component={LeftDrawer} />
            </Stack.Group>
            <Stack.Group
                screenOptions={{
                    animation: 'fade',
                    presentation: 'fullScreenModal',
                }}>
                <Stack.Screen name="ScanModal" component={ScanScreen} />
            </Stack.Group>

        </Stack.Navigator>
    )
}