import List from './List'
import { ComponentContainer } from './ComponentContainer'
import { DenseComponentLike } from '~/types'

type Props = {
  data: DenseComponentLike[]
  tag: string
}
export default function DenseComponentList({ data, tag }: Props) {
  return (
    <List
      data={data}
      renderItem={(t) => (
        <ComponentContainer
          stats={t.item.stats}
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
