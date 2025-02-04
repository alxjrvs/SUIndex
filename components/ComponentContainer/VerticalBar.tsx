import { View } from 'react-native'
import colors from '~/colors'
import { ComponentLikeData } from '~/context/reference/models/types'
import { BaseComponentLike } from '~/context/reference/models/BaseComponentLike'
import { TechLevelDisplay } from '../TechLevelDisplay'
import { RequiredSlotsDisplay } from '../RequiredSlotsDisplay'
import { SalvageValueDisplay } from '../SalvageValueDisplay'
import { isMechChassis } from '~/context/reference/models/guards'

type Props = {
  backgroundColor: (typeof colors)[keyof typeof colors]
  component: BaseComponentLike<ComponentLikeData>
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
