import { TextProps, Text, StyleSheet } from 'react-native'
import colors from '~/colors'
import { fonts } from '~/themes/apptheme'

type Props = {
  variant?: keyof typeof fonts
  highlight?: 'none' | (typeof colors)[keyof typeof colors]
} & TextProps

export function AppText({
  variant = 'regular',
  highlight = 'none',
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
