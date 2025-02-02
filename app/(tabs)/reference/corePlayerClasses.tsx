import PlayerClassList from '~/components/PlayerClassList'
import { useReference } from '~/context/reference/useReference'

export default function CorePlayerClasses() {
  const { playerClasses } = useReference()

  return <PlayerClassList data={playerClasses.filter((pc) => pc.isCore)} />
}
