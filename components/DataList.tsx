import { View } from 'react-native'
import { AppText } from './AppText'
import React from 'react'
import colors from '~/colors'
import { DataValue } from '~/types'
import { ActivationCost } from './ComponentContainer/ActivationCost'

type Props = {
  values: DataValue[]
  textColor?: (typeof colors)[keyof typeof colors]
}
export function DataList({ values, textColor }: Props) {
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
          {v.cost ? (
            <ActivationCost label={v.value} textColor={textColor} />
          ) : (
            <AppText variant="bold" style={[textColor && { color: textColor }]}>
              {v.value}
            </AppText>
          )}

          {index === arr.length - 1 || v.cost ? null : (
            <AppText variant="bold" style={[textColor && { color: textColor }]}>
              //
            </AppText>
          )}
        </React.Fragment>
      ))}
    </View>
  )
}
