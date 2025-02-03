import { View } from 'react-native'
import colors from '~/colors'
import { AppText } from '../AppText'

type Props = {
  label: string | number
  textColor?: (typeof colors)[keyof typeof colors]
  fontSize?: number
  invert?: boolean
}

export function ActivationCost({ label, fontSize, invert = false }: Props) {
  const background = invert ? colors.white : colors.black
  const color = invert ? colors.black : colors.white
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <AppText
        highlight={background}
        variant="bold"
        style={[
          {
            textTransform: 'uppercase',
            color,
            fontSize: fontSize || 15,
            paddingLeft: 2,
            zIndex: 2,
          },
        ]}
      >
        {label}
      </AppText>
      <View
        style={{
          width: 0,
          height: 0,
          backgroundColor: 'transparent',
          borderStyle: 'solid',
          borderLeftWidth: 9,
          borderRightWidth: 9,
          borderBottomWidth: 10,
          borderLeftColor: 'transparent',
          borderRightColor: 'transparent',
          borderBottomColor: background,
          transform: [{ rotate: '90deg' }],
          left: -4,
          marginRight: -10,
          zIndex: 1,
        }}
      />
    </View>
  )
}
