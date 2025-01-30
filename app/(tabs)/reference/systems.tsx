import DenseComponentList from '~/components/DenseComponentList'
import { useReference } from '~/context/reference/useReference'

export default function Systems() {
  const { systems } = useReference()

  return <DenseComponentList data={systems} tag="system" />
}
