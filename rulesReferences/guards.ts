import { BaseComponentLike } from './BaseComponentLike'
import { MechChassis } from './MechChassis'
import { RollTable } from './RollTable'
import { ComponentLike } from './types'

export function isMechChassis(
  component: BaseComponentLike<ComponentLike>
): component is MechChassis {
  return component instanceof MechChassis
}

export function isRollTable(
  component: BaseComponentLike<ComponentLike>
): component is RollTable {
  return component instanceof RollTable
}
