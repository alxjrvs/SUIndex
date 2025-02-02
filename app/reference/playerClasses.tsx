import PlayerClassList from '~/components/PlayerClassList'
import { useReference } from '~/context/reference/useReference'

export default function PlayerClasses() {
  const { playerClasses } = useReference()

  return <PlayerClassList data={playerClasses} />
}
