import { ComponentList } from '~/components/ComponentList'
import { useReference } from '~/context/reference/useReference'

export default function CorePlayerClasses() {
  const { playerClasses } = useReference()

  return (
    <ComponentList
      data={playerClasses.filter((pc) => pc.isCore)}
      tag="core-player-class"
    />
  )
}
