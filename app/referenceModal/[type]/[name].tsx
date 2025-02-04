import { router, useLocalSearchParams } from 'expo-router'
import { Platform, Pressable, StyleSheet } from 'react-native'
import Animated, { FadeIn, SlideInDown } from 'react-native-reanimated'
import { ComponentContainer } from '~/components/ComponentContainer'
import { ReferenceState } from '~/context/reference/types'
import { useReference } from '~/context/reference/useReference'
import { BaseComponentLike } from '~/context/reference/models/BaseComponentLike'
import { ComponentLikeData } from '~/context/reference/models/types'
import { ReferencableComponentType } from '~/types'

const allowedTypes = ['trait', 'module', 'system']

const filterByName =
  (name: string) => (item: BaseComponentLike<ComponentLikeData>) =>
    String(item.name).toLowerCase() === name.toLowerCase()

const getDataByType = (
  type: ReferencableComponentType,
  reference: ReferenceState
) => {
  switch (type) {
    case 'trait':
      return [...reference.traits, ...reference.keywords]
    case 'module':
      return reference.modules
    case 'system':
      return reference.systems
  }
}

function isReferencableComponentType(
  type: string
): type is ReferencableComponentType {
  return allowedTypes.includes(type)
}
export default function ReferenceModal() {
  const { type, name } = useLocalSearchParams<{ type: string; name: string }>()

  const reference = useReference()

  if (!isReferencableComponentType(type)) {
    return null
  }

  const data = getDataByType(type, reference)
  const component = data.find(filterByName(name))

  if (!component) {
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
            web: 1024 as unknown as '100%',
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
