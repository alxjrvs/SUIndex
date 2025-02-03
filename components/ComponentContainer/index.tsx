import { View, ViewStyle } from 'react-native'
import colors, { levelToBlue } from '~/colors'
import { AppText } from '../AppText'
import { BaseComponentLike } from '~/rulesReferences/BaseComponentLike'
import { ComponentLikeData } from '~/rulesReferences/types'
import { Header } from './Header'
import { Action } from './Action'
import { VerticalBar } from './VerticalBar'
import {
  isAbility,
  isCrawlerType,
  isMechChassis,
  isPlayerClass,
  isRollTable,
} from '~/rulesReferences/guards'
import { ChassisStats } from './ChassisStats'
import { ChassisAbilities } from './ChassisAbilities'
import MiniRollTableDisplay from '../MiniRollTableDisplay'
import { RollTable } from '~/rulesReferences/RollTable'
import { ChassisPatterns } from './ChassisPatterns'
import { PropsWithChildren } from 'react'
import { AbilitySection } from './AbilitySection'

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
  const backgroundColor = headerColor || levelToBlue(component.techLevel)
  const isChassis = isMechChassis(component)
  const isPC = isPlayerClass(component)
  const isCrawerT = isCrawlerType(component)
  return (
    <View
      style={[{ backgroundColor: colors.SULightBlue, width: '100%' }, style]}
    >
      <Header
        backgroundColor={backgroundColor}
        level={isAbility(component) ? component.level : undefined}
        header={header || component.name || ''}
        details={component.details}
      >
        {isChassis && <ChassisStats stats={component.stats} />}
      </Header>
      <View style={{ flexDirection: 'row' }}>
        <VerticalBar
          forceShow={!!verticalBarBackground}
          component={component}
          backgroundColor={verticalBarBackground || backgroundColor}
        />
        <View
          style={[
            !hidePadding && { padding: 5, gap: 5 },
            {
              flex: 8,
              flexDirection: 'column',
              gap: 30,
              justifyContent: 'center',
            },
            isChassis && { paddingTop: 60 },
          ]}
        >
          {component.description && (
            <AppText variant="medium">{component.description}</AppText>
          )}
          {component.actions.map((action, index) => (
            <Action
              key={component.name + action.name + index}
              action={action}
            />
          ))}
          {children}
          {isCrawerT &&
            component.abilities.map((ability) => (
              <View>
                <AppText variant="bold">{ability.name}</AppText>
                <AppText>{ability.description}</AppText>
                {ability.rollTable && (
                  <MiniRollTableDisplay
                    rollTable={RollTable.digestedRollTable(ability.rollTable)}
                  />
                )}
              </View>
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
          {component.notes && (
            <AppText style={{ borderWidth: 1, padding: 5 }}>
              {component.notes}
            </AppText>
          )}
          {component.rollTable && (
            <MiniRollTableDisplay
              rollTable={RollTable.digestedRollTable(component.rollTable)}
              showCommand={!isRollTable(component)}
            />
          )}
          {isChassis && <ChassisAbilities abilities={component.abilities} />}
          {isChassis && component.patterns && (
            <ChassisPatterns patterns={component.patterns} />
          )}
        </View>
      </View>
    </View>
  )
}
