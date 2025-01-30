import { useReference } from '~/context/reference/useReference'
import BasicComponentList from '~/components/BasicComponentList'

export default function PlayerClasses() {
  const { playerClasses } = useReference()

  return <BasicComponentList data={playerClasses} tag="player-class" />
}
