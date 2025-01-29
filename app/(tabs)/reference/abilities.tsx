import { useReference } from '~/context/reference/useReference'
import { BasicComponentDisplay } from '~/components/BasicComponentDisplay'
import List from '~/components/List'

export default function Abilities() {
  const { abilities } = useReference()

  return (
    <List
      data={abilities}
      renderItem={(t) => {
        return <BasicComponentDisplay component={t.item} />
      }}
      keyExtractor={(t) => `${t.name}--ability`}
    />
  )
}
