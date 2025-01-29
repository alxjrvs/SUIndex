import { PropsWithChildren } from 'react'
import { View, StyleSheet, ViewProps } from 'react-native'
import colors from '~/colors'

type Props = {
  innerProps?: ViewProps
  outerProps?: ViewProps
}

export function DobuleBorderView({
  children,
  innerProps = {},
  outerProps = {},
}: PropsWithChildren<Props>) {
  return (
    <View {...outerProps} style={[styles.outer, outerProps.style]}>
      <View {...innerProps} style={[styles.inner, innerProps.style]}>
        {children}
      </View>
    </View>
  )
}

const sharedStyles = StyleSheet.create({
  border: {
    backgroundColor: 'white',
    borderColor: colors.black,
    borderStyle: 'solid',
    borderWidth: 1,
  },
})

const styles = StyleSheet.create({
  outer: {
    ...sharedStyles.border,
    padding: 3,
  },
  inner: {
    ...sharedStyles.border,
    padding: 10,
    minHeight: 20,
  },
})
