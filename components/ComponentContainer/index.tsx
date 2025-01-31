import { View, ViewStyle } from 'react-native'
import colors, { levelToBlue } from '~/colors'
import { AppText } from '../AppText'
import { BaseComponentLike } from '~/rulesReferences/BaseComponentLike'
import { ComponentLike } from '~/rulesReferences/types'
import { Header } from './Header'
import { Action } from './Action'
import { VerticalBar } from './VerticalBar'
import { isMechChassis } from '~/rulesReferences/guards'
import { ChassisStats } from './ChassisStats'
import { ChassisAbilities } from './ChassisAbilities'

type Props = {
  header?: string
  style?: ViewStyle
  hidePadding?: boolean
  headerColor?: (typeof colors)[keyof typeof colors]
  component: BaseComponentLike<ComponentLike>
}

export function ComponentContainer({
  header,
  style,
  hidePadding = false,
  headerColor,
  component,
}: Props) {
  const backgroundColor = headerColor || levelToBlue(component.techLevel)
  const isChassis = isMechChassis(component)
  return (
    <View
      style={[{ backgroundColor: colors.SULightBlue, paddingBottom: 5 }, style]}
    >
      <Header
        backgroundColor={backgroundColor}
        header={header || component.name || ''}
        details={component.details}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <VerticalBar component={component} backgroundColor={backgroundColor} />

        <View
          style={[
            !hidePadding && { padding: 5, gap: 5 },
            {
              flex: 10,
              flexDirection: 'column',
              gap: 30,
              justifyContent: 'center',
            },
          ]}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {component.description && (
              <AppText style={{ flex: 1 }} variant="medium">
                {component.description}
              </AppText>
            )}
            {isChassis && <ChassisStats stats={component.stats} />}
          </View>
          {component.actions.map((action, index) => (
            <Action
              key={component.name + action.name + index}
              action={action}
            />
          ))}
          {component.notes && (
            <AppText style={{ borderWidth: 1, padding: 5 }}>
              {component.notes}
            </AppText>
          )}
          {isChassis && <ChassisAbilities abilities={component.abilities} />}
        </View>
      </View>
    </View>
  )
}
