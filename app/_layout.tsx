import { ThemeProvider } from '@react-navigation/native'
import ReferenceProvider from '~/context/reference/provider'
import theme from '~/themes/apptheme'
import Drawer from 'expo-router/drawer'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function RootLayout() {
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
