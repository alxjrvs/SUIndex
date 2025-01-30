import ComponentList from '~/components/ComponentList'
import { useReference } from '~/context/reference/useReference'

export default function Systems() {
  const { systems } = useReference()

  return <ComponentList data={systems} tag="system" />
}
