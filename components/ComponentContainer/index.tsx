import { PropsWithChildren } from 'react'
import { View, ViewStyle } from 'react-native'
import colors, { levelToBlue } from '~/colors'
import { AppText } from '../AppText'
import { BaseComponentLike } from '~/rulesReferences/baseComponentLike'
import { ComponentLike } from '~/rulesReferences/types'
import { Header } from './Header'
import { VerticalBar } from './VerticalBar'
import { Action } from './Action'

type Props = {
  header?: string
  style?: ViewStyle
  hidePadding?: boolean
  headerColor?: (typeof colors)[keyof typeof colors]
  component: BaseComponentLike<ComponentLike>
}

export function ComponentContainer({
  header,
  children,
  style,
  hidePadding = false,
  headerColor,
  component,
}: PropsWithChildren<Props>) {
  const backgroundColor = headerColor || levelToBlue(component.techLevel)
  return (
    <View style={[{ backgroundColor: colors.SULightBlue }, style]}>
      <Header
        backgroundColor={backgroundColor}
        header={header || component.name || ''}
        details={component.details}
      />
      <View style={{ flexDirection: 'row' }}>
        <VerticalBar component={component} backgroundColor={backgroundColor} />

        <View style={[!hidePadding && { padding: 5, gap: 5 }, { flex: 10 }]}>
          {children}
          {component.description && (
            <AppText variant="medium">{component.description}</AppText>
          )}
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
        </View>
      </View>
    </View>
  )
}
