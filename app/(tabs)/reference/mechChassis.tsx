import { useReference } from '~/context/reference/useReference'
import BasicComponentList from '~/components/BasicComponentList'

export default function MechChassis() {
  const { mechChassis } = useReference()

  return <BasicComponentList data={mechChassis} tag="mech-chassis" />
}
