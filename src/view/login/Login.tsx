import { NavigationProp, useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppRoutesType } from '../../types/routes/appRoutes';
import { View, Button, Text } from 'react-native'
type LoginScreenRouteProp = NativeStackScreenProps<AppRoutesType, 'Login'>;
export const Login = ({ route, navigation }: LoginScreenRouteProp) => {
    const navigator = useNavigation()
    return <View>
        <Text>Login page why it disappear</Text>
        <Button onPress={e => navigator.navigate('Home', { screen: 'Discover' })} title="GO to HomePage" />
        <Text>Login page why it disappear</Text>
        <Text>Login page why it disappear</Text>
    </View>
}