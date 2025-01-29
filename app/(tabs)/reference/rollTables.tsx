import { useReference } from '~/context/reference/useReference'
import List from '~/components/List'
import { RollTableDisplay } from '~/components/RollTableDisplay'

export default function RollTables() {
  const { rollTables } = useReference()

  return (
    <List
      data={rollTables}
      renderItem={(t) => {
        return <RollTableDisplay rollTable={t.item} />
      }}
      keyExtractor={(t) => `${t.name}--roll-table`}
    />
  )
}
