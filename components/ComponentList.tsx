import List from './List'
import { ComponentContainer } from './ComponentContainer'
import { BaseComponentLike } from '~/rulesReferences/baseComponentLike'
import { ComponentLike } from '~/rulesReferences/types'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { View } from 'react-native'

type Props = {
  data: BaseComponentLike<ComponentLike>[]
  tag: string
}
export default function ComponentList({ data, tag }: Props) {
  const { bottom } = useSafeAreaInsets()

  return (
    <List
      data={data}
      renderItem={(t) => <ComponentContainer component={t.item} />}
      keyExtractor={(t) => `${t.name}--${tag}`}
      ListFooterComponent={<View style={{ height: bottom }} />}
    />
  )
}
