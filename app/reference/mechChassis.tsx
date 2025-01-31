import colors from '~/colors'
import ComponentList from '~/components/ComponentList'
import { useReference } from '~/context/reference/useReference'

export default function MechChassis() {
  const { mechChassis } = useReference()

  return (
    <ComponentList
      headerColor={colors.SUMilitaryGreen}
      data={mechChassis}
      tag="mech-chassis"
    />
  )
}
