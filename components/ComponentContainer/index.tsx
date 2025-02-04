import { ViewStyle } from 'react-native'
import colors from '~/colors'
import { BaseComponentLike } from '~/context/reference/models/BaseComponentLike'
import { ComponentLikeData } from '~/context/reference/models/types'
import { Action } from './Action'
import { isMechChassis, isPlayerClass } from '~/context/reference/models/guards'
import { ChassisAbilities } from './ChassisAbilities'
import { ChassisPatterns } from './ChassisPatterns'
import { PropsWithChildren } from 'react'
import { AbilitySection } from './AbilitySection'
import { ComponentFrame } from './ComponentFrame'

type Props = {
  header?: string
  style?: ViewStyle
  hidePadding?: boolean
  headerColor?: (typeof colors)[keyof typeof colors]
  verticalBarBackground?: (typeof colors)[keyof typeof colors]
  component: BaseComponentLike<ComponentLikeData>
}

export function ComponentContainer({
  header,
  style,
  hidePadding = false,
  headerColor,
  component,
  verticalBarBackground,
  children,
}: PropsWithChildren<Props>) {
  const isChassis = isMechChassis(component)
  const isPC = isPlayerClass(component)
  return (
    <ComponentFrame
      style={style}
      verticalBarBackground={verticalBarBackground}
      hidePadding={hidePadding}
      header={header}
      headerColor={headerColor}
      component={component}
    >
      {children}
      {component.actions.map((action, index) => (
        <Action key={component.name + action.name + index} action={action} />
      ))}
      {isPC && (
        <AbilitySection
          headerColor={colors.SUBrick}
          sectionTitle="Core Abilities"
          abilities={component.coreAbilities}
        />
      )}
      {isPC && component.advancedAbilities.length > 0 && (
        <AbilitySection
          headerColor={colors.SUOrange}
          sectionTitle="Advanced Abilities"
          abilities={{
            ['Advanced Abilities']: component.advancedAbilities,
          }}
        />
      )}
      {isPC && Object.values(component.legendaryAbilities).length > 0 && (
        <AbilitySection
          headerColor={colors.SUPink}
          sectionTitle="Legendary Abilities"
          abilities={component.legendaryAbilities}
        />
      )}
      {isChassis && <ChassisAbilities abilities={component.abilities} />}
      {isChassis && component.patterns && (
        <ChassisPatterns patterns={component.patterns} />
      )}
    </ComponentFrame>
  )
}
