import colors from '~/colors'
import { ComponentList } from '~/components/ComponentList'
import { useReference } from '~/context/reference/useReference'

export default function CorePlayerClasses() {
  const { crawlerTypes } = useReference()

  return (
    <ComponentList
      headerColor={colors.SUPink}
      data={crawlerTypes}
      tag="crawler-types"
    />
  )
}
