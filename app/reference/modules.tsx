import ComponentList from '~/components/ComponentList'
import { useReference } from '~/context/reference/useReference'

export default function Modules() {
  const { modules } = useReference()

  return <ComponentList data={modules} tag="module" />
}
