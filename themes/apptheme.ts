import { DarkTheme, Theme } from '@react-navigation/native'
import colors from '../colors'
import { Platform } from 'react-native'

export const WEB_FONT_STACK =
  '"Fira Code", Monaco, Consolas, "Ubuntu Mono", monospace'

export const fonts = Platform.select({
  web: {
    regular: {
      fontFamily: WEB_FONT_STACK,
      fontWeight: '400',
    },
    medium: {
      fontFamily: WEB_FONT_STACK,
      fontWeight: '500',
    },
    bold: {
      fontFamily: WEB_FONT_STACK,
      fontWeight: '600',
    },
    heavy: {
      fontFamily: WEB_FONT_STACK,
      fontWeight: '700',
    },
  },
  ios: {
    regular: {
      fontFamily: 'Fira Code',
      fontWeight: '400',
    },
    medium: {
      fontFamily: 'Fira Code',
      fontWeight: '500',
    },
    bold: {
      fontFamily: 'Fira Code',
      fontWeight: '600',
    },
    heavy: {
      fontFamily: 'Fira Code',
      fontWeight: '700',
    },
  },
  default: {
    regular: {
      fontFamily: 'Fira Code',
      fontWeight: '300',
    },
    medium: {
      fontFamily: 'Fira Code',
      fontWeight: 'normal',
    },
    bold: {
      fontFamily: 'Fira Code',
      fontWeight: '600',
    },
    heavy: {
      fontFamily: 'Fira Code',
      fontWeight: '700',
    },
  },
} as const satisfies Record<string, Theme['fonts']>)

export default {
  ...DarkTheme,
  colors: {
    primary: colors.SUOrange,
    background: colors.white,
    card: colors.SUBlue,
    text: colors.black,
    border: colors.white,
    notification: colors.white,
  },
  fonts,
}
