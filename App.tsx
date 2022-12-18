import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppRoutesType } from './src/types/routes/appRoutes';
import { Login } from './src/view/login/Login';
import { Home } from './src/view/home/Home';
export default function App() {
    const AppRoutes = createNativeStackNavigator<AppRoutesType>();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer theme={{ ...DefaultTheme, colors: { ...DefaultTheme.colors, background: 'white' } }}>
                <AppRoutes.Navigator screenOptions={{ headerShown: false }} initialRouteName='Login' >
                    <AppRoutes.Screen name='Login' component={Login} />
                    <AppRoutes.Screen name='Home' component={Home} />
                </AppRoutes.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}
