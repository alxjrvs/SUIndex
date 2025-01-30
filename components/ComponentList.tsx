import List from './List'
import { ComponentContainer } from './ComponentContainer'
import { BaseComponentLike } from '~/rulesReferences/baseComponentLike'
import { ComponentLike } from '~/rulesReferences/types'

type Props = {
  data: BaseComponentLike<ComponentLike>[]
  tag: string
}
export default function ComponentList({ data, tag }: Props) {
  return (
    <List
      data={data}
      renderItem={(t) => <ComponentContainer component={t.item} />}
      keyExtractor={(t) => `${t.name}--${tag}`}
    />
  )
}
