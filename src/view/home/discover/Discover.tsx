import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Button } from 'react-native'
import { AppRoutesType } from '../../../types/routes/appRoutes';
import { HomeRoutesType } from '../Home';

export const Discover = () => {
    const route = useRoute<RouteProp<HomeRoutesType, 'Discover'>>()
    const navigation = useNavigation()
    return <View>
        <Button onPress={() => navigation.navigate('Login')} title='to near by page' />
    </View>
}