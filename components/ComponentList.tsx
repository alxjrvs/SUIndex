import List from './List'
import { ComponentContainer } from './ComponentContainer'
import { BaseComponentLike } from '~/rulesReferences/BaseComponentLike'
import { ComponentLike } from '~/rulesReferences/types'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { View } from 'react-native'
import { ComponentProps } from 'react'

type Props = {
  data: BaseComponentLike<ComponentLike>[]
  headerColor?: ComponentProps<typeof ComponentContainer>['headerColor']
  tag: string
}
export default function ComponentList({ data, tag, headerColor }: Props) {
  const { bottom } = useSafeAreaInsets()

  return (
    <List
      data={data}
      renderItem={(t) => (
        <ComponentContainer headerColor={headerColor} component={t.item} />
      )}
      keyExtractor={(t) => `${t.name}--${tag}`}
      ListFooterComponent={<View style={{ height: bottom }} />}
    />
  )
}
