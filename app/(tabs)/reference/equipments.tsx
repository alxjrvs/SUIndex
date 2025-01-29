import { useReference } from '~/context/reference/useReference'
import { BasicComponentDisplay } from '~/components/BasicComponentDisplay'
import List from '~/components/List'

export default function Equipments() {
  const { equipments } = useReference()

  return (
    <List
      data={equipments}
      renderItem={(t) => {
        return <BasicComponentDisplay component={t.item} />
      }}
      keyExtractor={(t) => `${t.name}--equipment`}
    />
  )
}
