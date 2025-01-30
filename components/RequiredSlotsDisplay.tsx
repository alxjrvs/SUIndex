import colors from '~/colors'
import { AppText } from './AppText'
import { View } from 'react-native'

type Props = {
  slotsRequired: number | undefined
}
export function RequiredSlotsDisplay({ slotsRequired }: Props) {
  if (!slotsRequired) return null
  return (
    <View
      style={{
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderLeftWidth: 15,
        borderRightWidth: 15,
        borderBottomWidth: 25,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: colors.black,
        position: 'relative',
      }}
    >
      <AppText
        variant="bold"
        style={{
          position: 'absolute',
          left: -4,
          top: 7.5,
          color: colors.white,
          textAlign: 'center',
        }}
      >
        {slotsRequired}
      </AppText>
    </View>
  )
}
