import { useReference } from '~/context/reference/useReference'
import BasicComponentList from '~/components/BasicComponentList'

export default function Systems() {
  const { systems } = useReference()

  return <BasicComponentList data={systems} tag="system" />
}
