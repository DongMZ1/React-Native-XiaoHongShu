import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppRoutesType } from '../../types/routes/appRoutes';
import { View, Button, Text } from 'react-native'
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
    return <View>
        <Text>{route.name}</Text>
        <Button onPress={e => navigator.navigate('Login')} title="GO to Login" />
        <HomeRoutes.Navigator screenOptions={{headerShown: false}} initialRouteName='Discover'>
            <HomeRoutes.Screen name='Discover' component={Discover} />
            <HomeRoutes.Screen name='Nearby' component={Nearby} />
        </HomeRoutes.Navigator>
    </View>
}