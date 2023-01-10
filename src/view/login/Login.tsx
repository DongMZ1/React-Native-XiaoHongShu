import { NavigationProp, useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppRoutesType } from '../../types/routes/appRoutes';
import { View, Button, Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
type LoginScreenRouteProp = NativeStackScreenProps<AppRoutesType, 'Login'>;
export const Login = ({ route, navigation }: LoginScreenRouteProp) => {
    const navigator = useNavigation()
    const login = async () => {
        try {
            await AsyncStorage.setItem('token', 'auth-token')
            navigator.navigate('Home', {screen: 'Discover'})
        } catch (e) {

        }
    }
    return <View style={{alignItems: 'center', height: '100vh'}}>
        <Button onPress={() => login()} title="Login" />
    </View>
}