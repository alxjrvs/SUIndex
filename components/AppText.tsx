import { TextProps, Text, StyleSheet } from 'react-native'
import colors from '~/colors'
import { fonts } from '~/themes/apptheme'

type Props = {
  variant?: keyof typeof fonts
  highlighted?: boolean
} & TextProps

export function AppText({
  variant = 'regular',
  highlighted = false,
  style,
  ...props
}: Props) {
  return (
    <Text
      style={[
        variant && fonts[variant],
        highlighted && styles.highlighted,
        style,
      ]}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  highlighted: {
    backgroundColor: colors.black,
    color: colors.white,
    textTransform: 'uppercase',
    alignSelf: 'center',
  },
})
