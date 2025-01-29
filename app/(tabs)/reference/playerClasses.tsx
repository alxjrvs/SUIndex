import { useReference } from '~/context/reference/useReference'
import { BasicComponentDisplay } from '~/components/BasicComponentDisplay'
import List from '~/components/List'

export default function PlayerClasses() {
  const { playerClasses } = useReference()

  return (
    <List
      data={playerClasses}
      renderItem={(t) => {
        return <BasicComponentDisplay component={t.item} />
      }}
      keyExtractor={(t) => `${t.name}--player-class`}
    />
  )
}
