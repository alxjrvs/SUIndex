import { useReference } from '~/context/reference/useReference'
import BasicComponentList from '~/components/BasicComponentList'

export default function Modules() {
  const { modules } = useReference()

  return <BasicComponentList data={modules} tag="module" />
}
