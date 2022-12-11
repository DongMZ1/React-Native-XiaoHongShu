export type AppRoutesType = {
    Home: undefined,
    Login: undefined
}

declare global {
    namespace ReactNavigation {
      interface RootParamList extends AppRoutesType {}
    }
  }