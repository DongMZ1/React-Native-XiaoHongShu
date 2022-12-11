import { NavigationProp, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppRoutesType } from '../../types/routes/appRoutes';
import { View, Button } from 'react-native'
import { Discover } from './discover/Discover';
import { Nearby } from './nearby/Nearby';
type HomeScreenRouteProp = NativeStackScreenProps<AppRoutesType, 'Home'>;
export const Home = ({ route, navigation }: HomeScreenRouteProp) => {
    const HomeRoutes = createNativeStackNavigator()
    const navigator = useNavigation()
    return <view>
        <Button onPress={e => navigator.navigate('Home')} title="GO to Login" />
        <HomeRoutes.Navigator>
            <HomeRoutes.Screen name='Discover' component={Discover} />
            <HomeRoutes.Screen name='Nearby' component={Nearby} />
        </HomeRoutes.Navigator>
    </view>
}