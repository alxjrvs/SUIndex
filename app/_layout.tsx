import { ThemeProvider } from '@react-navigation/native'
import { Stack } from 'expo-router'
import ReferenceProvider from '~/context/reference/provider'
import theme from '~/themes/apptheme'

export default function RootLayout() {
  return (
    <ThemeProvider value={theme}>
      <ReferenceProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="referenceModal"
            options={{
              presentation: 'transparentModal',
              animation: 'fade',
              headerShown: false,
            }}
          />
        </Stack>
      </ReferenceProvider>
    </ThemeProvider>
  )
}
