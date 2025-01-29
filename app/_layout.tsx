import { ThemeProvider } from '@react-navigation/native'
import ReferenceProvider from '~/context/reference/provider'
import { Stack } from 'expo-router'
import theme from '~/themes/apptheme'

export default function RootLayout() {
  return (
    <ThemeProvider value={theme}>
      <ReferenceProvider>
        <Stack screenOptions={{ headerShown: false, animation: 'none' }} />
      </ReferenceProvider>
    </ThemeProvider>
  )
}
