import { useReference } from '~/context/reference/useReference'
import ComponentList from '~/components/ComponentList'

export default function PlayerClasses() {
  const { playerClasses } = useReference()

  return <ComponentList data={playerClasses} tag="player-class" />
}
