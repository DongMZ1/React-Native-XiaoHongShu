import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function App() {
    const Routes = createNativeStackNavigator();
    return (
        <NavigationContainer theme={{...DefaultTheme, colors: {...DefaultTheme.colors, background: 'white'}}}><Routes.Navigator initialRouteName='login' >
            <Routes.Screen name='login' options={{ headerShown: false }} >{(props) => <View>login page</View>}</Routes.Screen>
            <Routes.Screen name='home' options={{ headerShown: false }} >{(props) => <View>home page</View>}</Routes.Screen>
        </Routes.Navigator></NavigationContainer>
    );
}
