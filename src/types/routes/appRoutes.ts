import { NavigatorScreenParams } from "@react-navigation/native"
import { HomeRoutesType } from "../../view/home/Home"


export type AppRoutesType = {
    Home: NavigatorScreenParams<HomeRoutesType>,
    Login: undefined
}

declare global {
    namespace ReactNavigation {
      interface RootParamList extends AppRoutesType {}
    }
  }