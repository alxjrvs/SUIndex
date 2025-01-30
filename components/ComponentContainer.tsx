import { PropsWithChildren } from 'react'
import { View, ViewStyle } from 'react-native'
import colors, { levelToBlue } from '~/colors'
import { AppText } from './AppText'
import { DataList } from './DataList'
import { BaseComponentLike } from '~/rulesReferences/baseComponentLike'
import { ComponentLike } from '~/rulesReferences/types'

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
  } = component
  const backgroundColor = headerColor || levelToBlue(techLevel)
  return (
    <View style={[{ backgroundColor: colors.SULightBlue }, style]}>
      <View style={{ backgroundColor, padding: 5 }}>
        <AppText
          variant="bold"
          style={{
            maxWidth: '80%',
            fontSize: 20,
            color: colors.white,
            flexWrap: 'wrap',
          }}
        >
          {header || name}
        </AppText>
        <View style={{ minHeight: 15 }}>
          <DataList textColor={colors.white} values={details} />
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        {techLevel && (
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
            <AppText
              variant="bold"
              style={{
                color: colors.white,
                backgroundColor: colors.black,
                width: 25,
                height: 25,
                textAlign: 'center',
                paddingTop: 4,
                borderRadius: 5,
              }}
            >
              T{techLevel}
            </AppText>
            {slotsRequired && (
              <View
                style={{
                  width: 0,
                  height: 0,
                  borderStyle: 'solid',
                  borderLeftWidth: 15,
                  borderRightWidth: 15,
                  borderBottomWidth: 25,
                  borderLeftColor: 'transparent',
                  borderRightColor: 'transparent',
                  borderBottomColor: colors.black,
                  position: 'relative',
                }}
              >
                <AppText
                  variant="bold"
                  style={{
                    position: 'absolute',
                    left: -4,
                    top: 7.5,
                    color: colors.white,
                    textAlign: 'center',
                  }}
                >
                  {slotsRequired}
                </AppText>
              </View>
            )}
            {salvageValue && (
              <AppText
                variant="bold"
                style={{
                  color: colors.white,
                  backgroundColor: colors.black,
                  width: 25,
                  height: 25,
                  textAlign: 'center',
                  paddingTop: 4,
                  borderRadius: 30,
                }}
              >
                {salvageValue}
              </AppText>
            )}
          </View>
        )}
        <View style={[!hidePadding && { padding: 5, gap: 5 }, { flex: 10 }]}>
          {children}
          {description && <AppText variant="medium">{description}</AppText>}
          {notes && (
            <AppText style={{ borderWidth: 1, padding: 5 }}>{notes}</AppText>
          )}
        </View>
      </View>
    </View>
  )
}
