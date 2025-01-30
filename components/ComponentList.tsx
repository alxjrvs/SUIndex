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
      renderItem={(t) => (
        <ComponentContainer
          details={t.item.details}
          level={t.item.techLevel}
          header={t.item.name}
          notes={t.item.notes}
          description={t.item.description}
        />
      )}
      keyExtractor={(t) => `${t.name}--${tag}`}
    />
  )
}
