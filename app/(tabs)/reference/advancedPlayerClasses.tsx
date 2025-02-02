import PlayerClassList from '~/components/PlayerClassList'
import { useReference } from '~/context/reference/useReference'

export default function AdvancedPlayerClasses() {
  const { playerClasses } = useReference()

  return <PlayerClassList data={playerClasses.filter((pc) => pc.isHybrid)} />
}
