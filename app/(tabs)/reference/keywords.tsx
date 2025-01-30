import { useReference } from '~/context/reference/useReference'
import BasicComponentList from '~/components/BasicComponentList'

export default function Keywords() {
  const { keywords } = useReference()

  return <BasicComponentList data={keywords} tag="keyword" />
}
