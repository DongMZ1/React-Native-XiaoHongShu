import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AppRoutesType } from '../../types/routes/appRoutes';
import { View, Button, Text } from 'react-native'
import { Discover } from './discover/Discover';
import { Nearby } from './nearby/Nearby';
export type HomeRoutesType = {
    Discover: undefined,
    Nearby: undefined
}
export const Home = () => {
    const HomeRoutes = createMaterialTopTabNavigator<HomeRoutesType>()
    const navigator = useNavigation()
    const route = useRoute<RouteProp<AppRoutesType, "Home">>()
    return <View style={{ height: '100%', flexDirection: 'column', display: 'flex' }}><HomeRoutes.Navigator style={{ flexGrow: 1 }} initialRouteName='Discover'>
        <HomeRoutes.Screen name='Discover' component={Discover} />
        <HomeRoutes.Screen name='Nearby' component={Nearby} />
    </HomeRoutes.Navigator>
        <View style={{ height: '50px', width: '100%', backgroundColor: 'red' }}></View>
    </View>
}