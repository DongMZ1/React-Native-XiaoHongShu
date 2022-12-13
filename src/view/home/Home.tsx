import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppRoutesType } from '../../types/routes/appRoutes';
import { View, Button } from 'react-native'
import { Discover } from './discover/Discover';
import { Nearby } from './nearby/Nearby';
export type HomeRoutesType = {
    Discover: undefined,
    Nearby: undefined
} 
export const Home = () => {
    const HomeRoutes = createNativeStackNavigator<HomeRoutesType>()
    const navigator = useNavigation()
    const route = useRoute<RouteProp<AppRoutesType, "Home">>()
    return <view>
        {route.name}
        <Button onPress={e => navigator.navigate('Login')} title="GO to Login" />
        <HomeRoutes.Navigator screenOptions={{headerShown: false}} initialRouteName='Discover'>
            <HomeRoutes.Screen name='Discover' component={Discover} />
            <HomeRoutes.Screen name='Nearby' component={Nearby} />
        </HomeRoutes.Navigator>
    </view>
}