import { View } from 'react-native'
import { AppText } from './AppText'
import React from 'react'
import colors from '~/colors'
import { DataValue } from '~/types'
import { ActivationCost } from './ComponentContainer/ActivationCost'
import ReferenceLink from './ReferenceLink'

type Props = {
  values: DataValue[]
  invert?: boolean
  textColor?: (typeof colors)[keyof typeof colors]
}
export function DataList({
  values,
  invert = false,
  textColor = colors.white,
}: Props) {
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
            <ActivationCost invert={invert} label={v.value} />
          ) : (
            <ReferenceLink type={v.type} name={String(v.value).split('(')[0]}>
              <AppText style={[textColor && { color: textColor }]}>
                {v.value}
              </AppText>
            </ReferenceLink>
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
