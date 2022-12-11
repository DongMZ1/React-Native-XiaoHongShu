import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppRoutesType } from './src/types/routes/appRoutes';
import { Login } from './src/view/login/Login';
import { Home } from './src/view/home/Home';
export default function App() {
    const AppRoutes = createNativeStackNavigator<AppRoutesType>();
    return (
        <NavigationContainer theme={{...DefaultTheme, colors: {...DefaultTheme.colors, background: 'white'}}}><AppRoutes.Navigator initialRouteName='Login' >
            <AppRoutes.Screen name='Login' options={{ headerShown: false }} component={Login} />
            <AppRoutes.Screen name='Home' options={{ headerShown: false }} component={Home} />
        </AppRoutes.Navigator></NavigationContainer>
    );
}
