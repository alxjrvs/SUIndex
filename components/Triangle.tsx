import colors from '~/colors'
import { PropsWithChildren } from 'react'
import { View, ViewStyle } from 'react-native'

type Props = {
  color?: (typeof colors)[keyof typeof colors]
  style?: ViewStyle
}
export function Triangle({
  children,
  color = colors.black,
  style,
}: PropsWithChildren<Props>) {
  return (
    <View
      style={[
        {
          borderLeftWidth: 15,
          borderRightWidth: 15,
          borderBottomWidth: 25,
          borderBottomColor: color,
        },
        style,
        {
          width: 0,
          height: 0,
          borderStyle: 'solid',
          borderLeftColor: 'transparent',
          borderRightColor: 'transparent',
          position: 'relative',
        },
      ]}
    >
      {children}
    </View>
  )
}
