import { BaseComponentLike } from './BaseComponentLike'
import { MechChassis } from './MechChassis'
import { ComponentLike } from './types'

export function isMechChassis(
  component: BaseComponentLike<ComponentLike>
): component is MechChassis {
  return component instanceof MechChassis
}
