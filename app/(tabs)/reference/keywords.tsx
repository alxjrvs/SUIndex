import colors from '~/colors'
import { ComponentList } from '~/components/ComponentList'
import { useReference } from '~/context/reference/useReference'

export default function Keywords() {
  const { keywords } = useReference()

  return (
    <ComponentList headerColor={colors.SUBlue} data={keywords} tag="keyword" />
  )
}
