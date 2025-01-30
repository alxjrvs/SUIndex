import { useReference } from '~/context/reference/useReference'
import BasicComponentList from '~/components/BasicComponentList'

export default function Abilities() {
  const { abilities } = useReference()

  return <BasicComponentList data={abilities} tag="ability" />
}
