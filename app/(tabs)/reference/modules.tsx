import { useReference } from '~/context/reference/useReference'
import DenseComponentList from '~/components/DenseComponentList'

export default function Modules() {
  const { modules } = useReference()

  return <DenseComponentList data={modules} tag="module" />
}
