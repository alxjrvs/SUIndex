import { View } from 'react-native'
import colors from '~/colors'
import { AppText } from '../AppText'

type Props = {
  label: string | number
  textColor?: (typeof colors)[keyof typeof colors]
  fontSize?: number
}

export function ActivationCost({ label, textColor, fontSize }: Props) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <AppText
        highlight={colors.black}
        variant="bold"
        style={[
          {
            textTransform: 'uppercase',
            color: textColor || colors.white,
            fontSize: fontSize || 15,
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
          borderBottomColor: colors.black,
          transform: [{ rotate: '90deg' }],
          left: -4,
          marginRight: -10,
          zIndex: 1,
        }}
      />
    </View>
  )
}
