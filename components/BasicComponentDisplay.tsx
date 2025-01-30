import { ComponentLike } from '~/types'
import { ComponentContainer } from './ComponentContainer'

type Props = {
  component: ComponentLike
}

export function BasicComponentDisplay({ component }: Props) {
  return (
    <ComponentContainer
      description={component.description}
      header={component.name}
    />
  )
}
