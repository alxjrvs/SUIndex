import { useReference } from '~/context/reference/useReference'
import { ComponentList } from '~/components/ComponentList'
import colors from '~/colors'

export default function Traits() {
  const { traits } = useReference()

  return (
    <ComponentList headerColor={colors.SUFiveBlue} data={traits} tag="trait" />
  )
}
