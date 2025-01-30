import { PropsWithChildren } from 'react'
import { View, ViewStyle } from 'react-native'
import colors, { levelToBlue } from '~/colors'
import { AppText } from '../AppText'
import { DataList } from '../DataList'
import { BaseComponentLike } from '~/rulesReferences/baseComponentLike'
import { ComponentLike } from '~/rulesReferences/types'
import { Header } from './Header'
import { VerticalBar } from './VerticalBar'

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
  const {
    techLevel,
    salvageValue,
    slotsRequired,
    details = [],
    notes,
    description,
    name,
    actions,
  } = component
  const backgroundColor = headerColor || levelToBlue(techLevel)
  return (
    <View style={[{ backgroundColor: colors.SULightBlue }, style]}>
      <Header
        backgroundColor={backgroundColor}
        header={header || name}
        details={details}
      />
      <View style={{ flexDirection: 'row' }}>
        <VerticalBar component={component} backgroundColor={backgroundColor} />

        <View style={[!hidePadding && { padding: 5, gap: 5 }, { flex: 10 }]}>
          {children}
          {description && <AppText variant="medium">{description}</AppText>}
          {actions && <AppText>Foo</AppText>}
          {notes && (
            <AppText style={{ borderWidth: 1, padding: 5 }}>{notes}</AppText>
          )}
        </View>
      </View>
    </View>
  )
}
