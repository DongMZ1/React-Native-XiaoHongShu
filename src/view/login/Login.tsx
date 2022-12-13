import { NavigationProp, useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppRoutesType } from '../../types/routes/appRoutes';
import { View, Button } from 'react-native'
type LoginScreenRouteProp = NativeStackScreenProps<AppRoutesType, 'Login'>;
export const Login = ({ route, navigation }: LoginScreenRouteProp) => {
    const navigator = useNavigation()
    return <view>
        login page
        <Button onPress={e => navigator.navigate('Home', { screen: 'Discover' })} title="GO to HomePage" />
    </view>
}