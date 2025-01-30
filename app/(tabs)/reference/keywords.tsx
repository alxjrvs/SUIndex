import { useReference } from '~/context/reference/useReference'
import DenseComponentList from '~/components/DenseComponentList'

export default function Keywords() {
  const { keywords } = useReference()

  return <DenseComponentList data={keywords} tag="keyword" />
}
