import React, { PropsWithChildren, useState } from 'react'
import { View, Pressable } from 'react-native'
import Collapsible from 'react-native-collapsible'
import colors from '~/colors'
import { AppText } from './AppText'
import { Triangle } from './Triangle'

type Props = {
  header: string
  headerColor?: (typeof colors)[keyof typeof colors]
  textColor?: (typeof colors)[keyof typeof colors]
}

export function CollapsibleInfoRow({
  children,
  header,
  headerColor = colors.SUOrange,
  textColor = colors.black,
}: PropsWithChildren<Props>) {
  const [collapsed, setCollapsed] = useState(true)
  return (
    <View>
      <Pressable
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: headerColor,
          cursor: 'pointer',
          padding: 5,
        }}
        onPress={() => setCollapsed(!collapsed)}
      >
        <AppText
          variant="heavy"
          style={{
            color: textColor,
            fontSize: 18,
          }}
        >
          {header}
        </AppText>
        <Triangle
          color={colors.white}
          style={{ transform: [{ rotate: collapsed ? '180deg' : '0deg' }] }}
        />
      </Pressable>
      <Collapsible collapsed={collapsed}>{children}</Collapsible>
    </View>
  )
}
