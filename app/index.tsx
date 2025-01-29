import { useEffect } from 'react'
import { Text, View } from 'react-native'
import { AbilityTree } from '~/rulesReferences/abilityTree'

export default function Index() {
  useEffect(() => {
    AbilityTree.fetch()
  }, [])

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  )
}
