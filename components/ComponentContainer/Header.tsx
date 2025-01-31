import { View } from 'react-native'
import colors from '~/colors'
import { AppText } from '../AppText'
import { DataList } from '../DataList'
import { DataValue } from '~/types'
import { PropsWithChildren } from 'react'

type Props = {
  backgroundColor: (typeof colors)[keyof typeof colors]
  header: string
  textColor?: (typeof colors)[keyof typeof colors]
  details?: DataValue[]
}
export function Header({
  backgroundColor,
  header,
  textColor = colors.white,
  details = [],
  children,
}: PropsWithChildren<Props>) {
  return (
    <View style={{ backgroundColor, padding: 5 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <AppText
          variant="bold"
          style={{
            maxWidth: '80%',
            fontSize: 25,
            color: textColor,
            flexWrap: 'wrap',
          }}
        >
          {header}
        </AppText>
        {children}
      </View>
      <View style={{ minHeight: 15 }}>
        <DataList textColor={textColor} values={details} />
      </View>
    </View>
  )
}
