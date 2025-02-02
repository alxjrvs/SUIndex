import { router, useLocalSearchParams } from 'expo-router'
import { useEffect } from 'react'
import { Platform, Pressable, StyleSheet, Text } from 'react-native'
import Animated, { FadeIn, SlideInDown } from 'react-native-reanimated'
import { ComponentContainer } from '~/components/ComponentContainer'
import { useReference } from '~/context/reference/useReference'

const allowedTypes = ['trait']

export default function ReferenceModal() {
  const { type, name } = useLocalSearchParams<{ type: string; name: string }>()

  const { traits } = useReference()

  if (!allowedTypes.includes(type)) {
    router.back()
    return null
  }

  const data = traits

  const component = data.find(
    (item) => item.name.toLowerCase() === name.toLowerCase()
  )
  if (!component) {
    router.back()
    return null
  }

  return (
    <Animated.View
      entering={FadeIn}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000040',
      }}
    >
      <Pressable
        onPress={() => router.dismiss()}
        style={StyleSheet.absoluteFill}
      />
      <Animated.View
        entering={SlideInDown}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          maxWidth: Platform.select({
            default: '100%',
          }),
          minWidth: Platform.select({
            web: undefined,
            default: '100%',
          }),
        }}
      >
        <ComponentContainer component={component} />
      </Animated.View>
    </Animated.View>
  )
}
