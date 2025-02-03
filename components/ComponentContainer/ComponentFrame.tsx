import { View, ViewStyle } from 'react-native'
import colors, { levelToBlue } from '~/colors'
import { AppText } from '../AppText'
import { BaseComponentLike } from '~/rulesReferences/BaseComponentLike'
import { ComponentLikeData } from '~/rulesReferences/types'
import { Header } from './Header'
import { VerticalBar } from './VerticalBar'
import { isAbility, isMechChassis, isRollTable } from '~/rulesReferences/guards'
import { ChassisStats } from './ChassisStats'
import MiniRollTableDisplay from '../MiniRollTableDisplay'
import { RollTable } from '~/rulesReferences/RollTable'
import { PropsWithChildren } from 'react'

type Props = {
  header?: string
  style?: ViewStyle
  hidePadding?: boolean
  headerColor?: (typeof colors)[keyof typeof colors]
  verticalBarBackground?: (typeof colors)[keyof typeof colors]
  component: BaseComponentLike<ComponentLikeData>
}

export function ComponentFrame({
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

          {children}
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
        </View>
      </View>
    </View>
  )
}
