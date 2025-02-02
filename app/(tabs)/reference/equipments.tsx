import ComponentList from '~/components/ComponentList'
import { useReference } from '~/context/reference/useReference'

export default function Equipments() {
  const { equipments } = useReference()

  return <ComponentList showTLFilter data={equipments} tag="equipment" />
}
