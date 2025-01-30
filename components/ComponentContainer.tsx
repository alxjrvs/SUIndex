import { PropsWithChildren } from 'react'
import { View, ViewStyle } from 'react-native'
import colors, { levelToBlue } from '~/colors'
import { AppText } from './AppText'
import { DataValue } from '~/types'
import { DataList } from './DataList'

type Props = {
  header: string
  level?: 1 | 2 | 3 | 4 | 5 | 6
  description?: string
  notes?: string
  stats?: DataValue[]
  style?: ViewStyle
}

export function ComponentContainer({
  header,
  description,
  stats = [],
  level,
  notes,
  children,
  style,
}: PropsWithChildren<Props>) {
  const backgroundColor = levelToBlue(level)
  return (
    <View style={[{ backgroundColor: colors.SULightBlue }, style]}>
      <View style={{ backgroundColor, padding: 5 }}>
        {level && (
          <AppText
            variant="bold"
            style={{
              position: 'absolute',
              right: 0,
              color: colors.white,
              width: 20,
              height: 20,
              textAlign: 'center',
            }}
          >
            {level}
          </AppText>
        )}
        {header && (
          <AppText
            variant="heavy"
            style={{
              maxWidth: '80%',
              fontSize: 20,
              color: colors.white,
              flexWrap: 'wrap',
            }}
          >
            {header}
          </AppText>
        )}
        <View style={{ minHeight: 15 }}>
          <DataList textColor={colors.white} values={stats} />
        </View>
      </View>
      <View style={{ padding: 5, gap: 5 }}>
        {children}
        {description && <AppText variant="medium">{description}</AppText>}
        {notes && (
          <AppText style={{ borderWidth: 1, padding: 5 }}>{notes}</AppText>
        )}
      </View>
    </View>
  )
}
