import { View } from 'react-native'
import colors from '~/colors'
import { ComponentLike } from '~/rulesReferences/types'
import { BaseComponentLike } from '~/rulesReferences/BaseComponentLike'
import { TechLevelDisplay } from '../TechLevelDisplay'
import { RequiredSlotsDisplay } from '../RequiredSlotsDisplay'
import { SalvageValueDisplay } from '../SalvageValueDisplay'
import { isMechChassis } from '~/rulesReferences/guards'

type Props = {
  backgroundColor: (typeof colors)[keyof typeof colors]
  component: BaseComponentLike<ComponentLike>
  forceShow?: boolean
}

export function VerticalBar({ component, backgroundColor, forceShow }: Props) {
  const shouldHide = !component.techLevel || isMechChassis(component)
  const hide = forceShow ? false : shouldHide
  if (hide) return null

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
