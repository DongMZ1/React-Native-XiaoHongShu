import { NavigationProp, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppRoutesType } from '../../types/routes/appRoutes';
import { View, Button } from 'react-native'
import { Discover } from './discover/Discover';
import { Nearby } from './nearby/Nearby';
import { HomeRoutesType } from '../../types/routes/homeRoutes';
type HomeScreenRouteProp = NativeStackScreenProps<AppRoutesType, 'Home'>;
export const Home = ({ route, navigation }: HomeScreenRouteProp) => {
    const HomeRoutes = createNativeStackNavigator<HomeRoutesType>()
    const navigator = useNavigation()
    return <view>
        <Button onPress={e => navigator.navigate('Login')} title="GO to Login" />
        <HomeRoutes.Navigator screenOptions={{headerShown: false}} initialRouteName='Discover'>
            <HomeRoutes.Screen name='Discover' component={Discover} />
            <HomeRoutes.Screen name='Nearby' component={Nearby} />
        </HomeRoutes.Navigator>
    </view>
}