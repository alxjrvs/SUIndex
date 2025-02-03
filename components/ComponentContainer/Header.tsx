import { View } from 'react-native'
import colors from '~/colors'
import { AppText } from '../AppText'
import { DataList } from '../DataList'
import { DataValue } from '~/types'
import { PropsWithChildren } from 'react'

type Props = {
  backgroundColor: (typeof colors)[keyof typeof colors]
  header: string
  details?: DataValue[]
  level?: number | string
}
export function Header({
  backgroundColor,
  header,
  level,
  details = [],
  children,
}: PropsWithChildren<Props>) {
  return (
    <View style={{ backgroundColor, padding: 5 }}>
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
            {children}
          </View>
          <View style={{ minHeight: 15 }}>
            <DataList
              textColor={colors.white}
              invert={backgroundColor === colors.black}
              values={details}
            />
          </View>
        </View>
      </View>
    </View>
  )
}
