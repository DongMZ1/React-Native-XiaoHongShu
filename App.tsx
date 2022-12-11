import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppRoutesType } from './src/types/routes/appRoutes';
import { Login } from './src/view/login/Login';
export default function App() {
    const Routes = createNativeStackNavigator<AppRoutesType>();
    return (
        <NavigationContainer theme={{...DefaultTheme, colors: {...DefaultTheme.colors, background: 'white'}}}><Routes.Navigator initialRouteName='Login' >
            <Routes.Screen name='Login' options={{ headerShown: false }} component={Login} />
            <Routes.Screen name='Home' options={{ headerShown: false }} >{(props) => <View>home page</View>}</Routes.Screen>
        </Routes.Navigator></NavigationContainer>
    );
}
