import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AppRoutesType } from '../../types/routes/appRoutes';

export const useAppNavigation = useNavigation<NavigationProp<AppRoutesType>>