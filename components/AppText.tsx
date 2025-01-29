import { TextProps, Text } from 'react-native'
import { fonts } from '~/theme'

type Props = {
  variant?: keyof typeof fonts
} & TextProps

export function AppText({ variant = 'regular', ...props }: Props) {
  return <Text style={[variant && fonts[variant]]} {...props} />
}
