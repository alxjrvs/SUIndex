import { useReference } from '~/context/reference/useReference'
import { BasicComponentDisplay } from '~/components/BasicComponentDisplay'
import List from '~/components/List'

export default function Traits() {
  const { traits } = useReference()

  return (
    <List
      data={traits}
      renderItem={(t) => {
        return <BasicComponentDisplay component={t.item} />
      }}
      keyExtractor={(t) => `${t.name}--trait`}
    />
  )
}
