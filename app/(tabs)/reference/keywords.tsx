import ComponentList from '~/components/ComponentList'
import { useReference } from '~/context/reference/useReference'

export default function Keywords() {
  const { keywords } = useReference()

  return <ComponentList data={keywords} tag="keyword" />
}
