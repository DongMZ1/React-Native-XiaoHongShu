import { NavigationProp, useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppRoutesType } from '../../types/routes/appRoutes';
import { View, Button } from 'react-native'
import { useAppNavigation } from '../../utility/hooks/useAppNavigationt';
type LoginScreenRouteProp = NativeStackScreenProps<AppRoutesType, 'Login'>;
export const Login = ({ route, navigation }: LoginScreenRouteProp) => {
    const navigator = useAppNavigation()
    return <view>
        <Button onPress={e => navigator.navigate('Home')} title="GO to HomePage" />
    </view>
}