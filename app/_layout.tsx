import { Drawer } from 'expo-router/drawer'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import * as SplashScreen from 'expo-splash-screen'

import { ThemeProvider, useTheme } from '@react-navigation/native'
import ReferenceProvider from '~/context/reference/provider'

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const theme = useTheme()
  return (
    <ThemeProvider value={theme}>
      <ReferenceProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Drawer />
        </GestureHandlerRootView>
      </ReferenceProvider>
    </ThemeProvider>
  )
}
