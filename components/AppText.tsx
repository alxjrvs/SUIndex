import { TextProps, Text, StyleSheet } from 'react-native'
import colors from '~/colors'
import { fonts } from '~/themes/apptheme'

type Props = {
  variant?: keyof typeof fonts
  highlight?: 'none' | (typeof colors)[keyof typeof colors]
  color?: (typeof colors)[keyof typeof colors]
} & TextProps

export function AppText({
  variant = 'regular',
  highlight = 'none',
  color = colors.black,
  style,
  ...props
}: Props) {
  return (
    <Text
      {...props}
      style={[
        variant && fonts[variant],
        highlight !== 'none' && [
          styles.highlight,
          { backgroundColor: highlight },
        ],
        color && { color },
        style,
      ]}
    />
  )
}

const styles = StyleSheet.create({
  highlight: {
    backgroundColor: colors.black,
    color: colors.white,
    textTransform: 'uppercase',
    alignSelf: 'center',
  },
})
