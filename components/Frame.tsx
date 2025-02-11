import { StyleProp, View, ViewStyle } from 'react-native'
import colors, { levelToBlue } from '~/colors'
import { AppText } from './AppText'
import { VerticalBar } from './ComponentContainer/VerticalBar'
import MiniRollTableDisplay from './MiniRollTableDisplay'
import { RollTable } from '~/context/reference/models/RollTable'
import { PropsWithChildren } from 'react'
import { TechLevel } from '~/context/reference/models/types'
import { DataValue } from '~/types'
import { DataList } from './DataList'

type Props = {
  header: string | undefined
  style?: ViewStyle
  hidePadding?: boolean
  hideSidebar?: boolean
  headerColor?: (typeof colors)[keyof typeof colors]
  verticalBarBackground?: (typeof colors)[keyof typeof colors]
  headerContent?: React.ReactNode
  level?: string | number | undefined
  contentContainerStyle?: StyleProp<ViewStyle>
  techLevel?: TechLevel
  details?: DataValue[]
  description?: string
  notes?: string
  rollTable?: Record<string, string>
  salveageValue?: number
  slotsRequired?: number
}

export function Frame({
  header,
  style,
  hidePadding = false,
  level,
  headerColor,
  verticalBarBackground,
  children,
  headerContent,
  contentContainerStyle = {},
  details,
  description,
  techLevel = undefined,
  rollTable,
  notes,
  salveageValue,
  slotsRequired,
  hideSidebar = false,
}: PropsWithChildren<Props>) {
  const backgroundColor = headerColor || levelToBlue(techLevel)
  const forceVerticalBar =
    verticalBarBackground !== undefined && hideSidebar === false
      ? !!verticalBarBackground
      : false
  const showVerticalBar =
    !hideSidebar &&
    (forceVerticalBar || techLevel !== undefined || level !== undefined)

  console.log('Show Vertical Bar', techLevel)
  return (
    <View
      style={[{ backgroundColor: colors.SULightBlue, width: '100%' }, style]}
    >
      <View style={{ backgroundColor, padding: 5, zIndex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
          {level && (
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                maxWidth: 35,
                minWidth: 35,
              }}
            >
              <AppText
                variant="bold"
                style={{
                  color: colors.white,
                  fontSize: 25,
                  paddingRight: 5,
                }}
              >
                {level}
              </AppText>
            </View>
          )}
          <View style={{ flex: 8 }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              {header && (
                <AppText
                  variant="bold"
                  style={{
                    maxWidth: '80%',
                    fontSize: 25,
                    flexWrap: 'wrap',
                    color: colors.white,
                  }}
                >
                  {header}
                </AppText>
              )}
              {headerContent}
            </View>
            <View style={{ minHeight: 15 }}>
              <DataList
                textColor={colors.white}
                invert={backgroundColor === colors.black}
                values={details || []}
              />
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: verticalBarBackground || backgroundColor,
        }}
      >
        <VerticalBar
          visible={showVerticalBar}
          techLevel={techLevel}
          slotsRequired={slotsRequired}
          salvageValue={salveageValue}
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
              backgroundColor: colors.SULightBlue,
            },
            contentContainerStyle,
          ]}
        >
          {description && <AppText variant="medium">{description}</AppText>}

          {children}
          {notes && (
            <AppText style={{ borderWidth: 1, padding: 5 }}>{notes}</AppText>
          )}
          {rollTable && (
            <MiniRollTableDisplay
              rollTable={RollTable.digestedRollTable(rollTable)}
            />
          )}
        </View>
      </View>
    </View>
  )
}
