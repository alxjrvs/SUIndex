import { useReference } from '~/context/reference/useReference'
import { BasicComponentDisplay } from '~/components/BasicComponentDisplay'
import List from '~/components/List'

export default function MechChassis() {
  const { mechChassis } = useReference()

  return (
    <List
      data={mechChassis}
      renderItem={(t) => {
        return <BasicComponentDisplay component={t.item} />
      }}
      keyExtractor={(t) => `${t.name}--mech-chassis`}
    />
  )
}
