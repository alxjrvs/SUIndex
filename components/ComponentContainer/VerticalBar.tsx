import { View } from 'react-native'
import colors from '~/colors'
import { ComponentLike } from '~/rulesReferences/types'
import { BaseComponentLike } from '~/rulesReferences/BaseComponentLike'
import { TechLevelDisplay } from '../TechLevelDisplay'
import { RequiredSlotsDisplay } from '../RequiredSlotsDisplay'
import { SalvageValueDisplay } from '../SalvageValueDisplay'

type Props = {
  backgroundColor: (typeof colors)[keyof typeof colors]
  component: BaseComponentLike<ComponentLike>
}

export function VerticalBar({ component, backgroundColor }: Props) {
  if (!component.techLevel) return null

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
      <TechLevelDisplay techLevel={component.techLevel} />
      <RequiredSlotsDisplay slotsRequired={component.slotsRequired} />
      <SalvageValueDisplay salvageValue={component.salvageValue} />
    </View>
  )
}
