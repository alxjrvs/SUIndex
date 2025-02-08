import { StyleProp, View, ViewStyle } from 'react-native'
import colors, { levelToBlue } from '~/colors'
import { AppText } from './AppText'
import { Header } from './ComponentContainer/Header'
import { VerticalBar } from './ComponentContainer/VerticalBar'
import MiniRollTableDisplay from './MiniRollTableDisplay'
import { RollTable } from '~/context/reference/models/RollTable'
import { PropsWithChildren } from 'react'
import { TechLevel } from '~/context/reference/models/types'
import { DataValue } from '~/types'

type Props = {
  header: string | undefined
  style?: ViewStyle
  hidePadding?: boolean
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
}: PropsWithChildren<Props>) {
  const backgroundColor = headerColor || levelToBlue(techLevel)
  const forceVerticalBar =
    verticalBarBackground !== undefined ? !!verticalBarBackground : false
  const showVerticalBar =
    forceVerticalBar || techLevel !== undefined || level !== undefined
  return (
    <View
      style={[{ backgroundColor: colors.SULightBlue, width: '100%' }, style]}
    >
      <Header
        backgroundColor={backgroundColor}
        level={level}
        header={header}
        details={details}
      >
        {headerContent}
      </Header>
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
              backgroundColor: colors.white,
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
