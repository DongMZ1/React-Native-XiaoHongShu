import { NavigationProp, useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppRoutesType } from '../../types/routes/appRoutes';
import { View, Button, Text } from 'react-native'
import { AnimatedView } from '../../shared/components/AnimatedView';
import { useState } from 'react';
type LoginScreenRouteProp = NativeStackScreenProps<AppRoutesType, 'Login'>;
export const Login = ({ route, navigation }: LoginScreenRouteProp) => {
    const navigator = useNavigation()
    const [show, setshow] = useState(false);
    return <View>
        <AnimatedView show={show} time={200} animationType={['Opacity']}><Text>This thing should fade in and fade out</Text></AnimatedView>
        <Button onPress={() => setshow(state => !state)} title="Switch" />
    </View>
}