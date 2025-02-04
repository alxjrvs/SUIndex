import { View } from 'react-native'
import colors from '~/colors'
import { TechLevelDisplay } from '../TechLevelDisplay'
import { RequiredSlotsDisplay } from '../RequiredSlotsDisplay'
import { SalvageValueDisplay } from '../SalvageValueDisplay'
import { TechLevel } from '~/context/reference/models/types'

type Props = {
  techLevel?: TechLevel
  slotsRequired?: number
  salvageValue?: number
  visible?: boolean
  backgroundColor: (typeof colors)[keyof typeof colors]
}

export function VerticalBar({
  backgroundColor,
  slotsRequired,
  salvageValue,
  techLevel,
  visible,
}: Props) {
  if (!visible) return null

  return (
    <View
      style={{
        flexDirection: 'column',
        overflow: 'visible',
        backgroundColor,
        flex: 1,
        alignItems: 'center',
        gap: 5,
        paddingBottom: 5,
        maxWidth: 35,
        minWidth: 35,
      }}
    >
      <TechLevelDisplay techLevel={techLevel} />
      <RequiredSlotsDisplay slotsRequired={slotsRequired} />
      <SalvageValueDisplay salvageValue={salvageValue} />
    </View>
  )
}
