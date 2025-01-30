import ComponentList from '~/components/ComponentList'
import { useReference } from '~/context/reference/useReference'

export default function Abilities() {
  const { abilities } = useReference()

  return <ComponentList data={abilities} tag="ability" />
}
