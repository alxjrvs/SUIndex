import { useReference } from '~/context/reference/useReference'
import { BasicComponentDisplay } from '~/components/BasicComponentDisplay'
import List from '~/components/List'

export default function Keywords() {
  const { keywords } = useReference()

  return (
    <List
      data={keywords}
      renderItem={(t) => {
        return <BasicComponentDisplay component={t.item} />
      }}
      keyExtractor={(t) => `${t.name}--keyword`}
    />
  )
}
