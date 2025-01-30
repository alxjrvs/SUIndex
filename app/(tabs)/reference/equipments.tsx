import { useReference } from '~/context/reference/useReference'
import DenseComponentList from '~/components/DenseComponentList'

export default function Equipments() {
  const { equipments } = useReference()

  return <DenseComponentList data={equipments} tag="equipment" />
}
