import { ComponentLike } from '~/types'
import List from './List'
import { BasicComponentDisplay } from './BasicComponentDisplay'

type Props = {
  data: ComponentLike[]
  tag: string
}
export default function BasicComponentList({ data, tag }: Props) {
  return (
    <List
      data={data}
      renderItem={(t) => <BasicComponentDisplay component={t.item} />}
      keyExtractor={(t) => `${t.name}--${tag}`}
    />
  )
}
