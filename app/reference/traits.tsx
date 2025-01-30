import { useReference } from '~/context/reference/useReference'
import ComponentList from '~/components/ComponentList'

export default function Traits() {
  const { traits } = useReference()

  return <ComponentList data={traits} tag="trait" />
}
