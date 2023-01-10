import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Button } from 'react-native'
import { AppRoutesType } from '../../../types/routes/appRoutes';
import { HomeRoutesType } from '../Home';

export const Discover = () => {
    const route = useRoute<RouteProp<HomeRoutesType, 'Discover'>>()
    const navigation = useNavigation()
    return <View style={{height: '100%', backgroundColor: 'blue', width: '100%'}}>
        
    </View>
}