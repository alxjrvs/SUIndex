import { ThemeProvider } from '@react-navigation/native'
import ReferenceProvider from '~/context/reference/provider'
import { Stack } from 'expo-router'
import theme from '~/theme'

export default function RootLayout() {
  return (
    <ThemeProvider value={theme}>
      <ReferenceProvider>
        <Stack initialRouteName="(tabs)">
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </ReferenceProvider>
    </ThemeProvider>
  )
}
