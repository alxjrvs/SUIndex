import { Link, router } from 'expo-router'
import { Pressable, StyleSheet, Text } from 'react-native'
import Animated, { FadeIn, SlideInDown } from 'react-native-reanimated'

export default function ReferenceModal() {
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
      {/* Dismiss modal when pressing outside */}
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
        }}
      >
        <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>
          Modal Screen
        </Text>
      </Animated.View>
    </Animated.View>
  )
}
