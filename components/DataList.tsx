import { StyleProp, TextStyle, View } from 'react-native'
import { AppText } from './AppText'
import React from 'react'
import colors from '~/colors'
import { DataValue } from '~/types'

type Props = {
  values: DataValue[]
  style?: StyleProp<TextStyle>
  textColor?: (typeof colors)[keyof typeof colors]
}
export function DataList({ values, style, textColor }: Props) {
  if (values.length <= 0) return null

  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 4,
        alignItems: 'center',
      }}
    >
      {values.map((v, index, arr) => (
        <React.Fragment key={`${v.value}-${index}-stat`}>
          <AppText
            highlight={v.bold ? colors.black : 'none'}
            variant="bold"
            style={[
              { textTransform: 'uppercase' },
              textColor && { color: textColor },
              v.bold && { color: colors.white, fontSize: 15 },
              style,
            ]}
          >
            {v.value}
          </AppText>

          {index === arr.length - 1 || v.bold ? null : (
            <AppText variant="bold" style={[textColor && { color: textColor }]}>
              //
            </AppText>
          )}
        </React.Fragment>
      ))}
    </View>
  )
}
