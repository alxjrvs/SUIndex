import List from './List'
import { ComponentContainer } from './ComponentContainer'
import { BaseComponentLike } from '~/rulesReferences/baseComponentLike'
import { ComponentLike } from '~/rulesReferences/types'

type Props = {
  data: BaseComponentLike<ComponentLike>[]
  tag: string
}
export default function BasicComponentList({ data, tag }: Props) {
  return (
    <List
      data={data}
      renderItem={(t) => (
        <ComponentContainer
          description={t.item.description}
          header={t.item.name}
        />
      )}
      keyExtractor={(t) => `${t.name}--${tag}`}
    />
  )
}
