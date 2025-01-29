import { AppText } from './AppText'
import { Trait } from '~/rulesReferences/trait'
import { DobuleBorderView } from './DoubleBorderView'
import colors from '~/colors'

interface ComponentLike {
  name: string
  description: string
}

type Props = {
  component: ComponentLike
}

export function BasicComponentDisplay({ component }: Props) {
  return (
    <DobuleBorderView>
      <AppText
        highlighted
        style={{
          position: 'absolute',
          top: -10,
        }}
        variant="bold"
      >
        {component.name}
      </AppText>
      <AppText>{component.description}</AppText>
    </DobuleBorderView>
  )
}
