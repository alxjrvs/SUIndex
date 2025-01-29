import React, { PropsWithChildren } from 'react'
import { ThemeProvider, defaultTheme } from 'retro-react'

export function RetroTheme({ children }: PropsWithChildren) {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
}
