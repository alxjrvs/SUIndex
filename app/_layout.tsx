import { ThemeProvider } from '@react-navigation/native'
import { Slot } from 'expo-router'
import ReferenceProvider from '~/context/reference/provider'
import theme from '~/themes/apptheme'

export default function RootLayout() {
  return (
    <ThemeProvider value={theme}>
      <ReferenceProvider>
        <Slot />
      </ReferenceProvider>
    </ThemeProvider>
  )
}
