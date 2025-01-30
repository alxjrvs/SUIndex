import { View } from 'react-native'
import colors from '~/colors'
import { ComponentLike } from '~/rulesReferences/types'
import { AppText } from '../AppText'
import { BaseComponentLike } from '~/rulesReferences/baseComponentLike'
import { TechLevelDisplay } from '../TechLevelDisplay'
import { RequiredSlotsDisplay } from '../RequiredSlotsDisplay'
import { SalvageValueDisplay } from '../SalvageValueDisplay'

type Props = {
  backgroundColor: (typeof colors)[keyof typeof colors]
  component: BaseComponentLike<ComponentLike>
}
export function VerticalBar({
  component: { techLevel, salvageValue, slotsRequired },
  backgroundColor,
}: Props) {
  if (!techLevel) return null

  return (
    <View
      style={{
        flexDirection: 'column',
        backgroundColor,
        flex: 1,
        alignItems: 'center',
        paddingVertical: 5,
        gap: 5,
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
