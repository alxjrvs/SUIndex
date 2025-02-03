import { ComponentList } from '~/components/ComponentList'
import { useReference } from '~/context/reference/useReference'

export default function AdvancedPlayerClasses() {
  const { playerClasses } = useReference()

  return (
    <ComponentList
      data={playerClasses.filter((pc) => pc.isHybrid)}
      tag="advanced-player-class"
    />
  )
}
