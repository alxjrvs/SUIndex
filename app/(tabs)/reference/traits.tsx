import { useReference } from '~/context/reference/useReference'
import BasicComponentList from '~/components/BasicComponentList'

export default function Traits() {
  const { traits } = useReference()

  return <BasicComponentList data={traits} tag="trait" />
}
