import { Ability } from './Ability'
import { BaseComponentLike } from './BaseComponentLike'
import { MechChassis } from './MechChassis'
import { RollTable } from './RollTable'
import { ComponentLike } from './types'

export function isMechChassis(
  component: BaseComponentLike<ComponentLike>
): component is MechChassis {
  return component instanceof MechChassis
}

export function isAbility(
  component: BaseComponentLike<ComponentLike>
): component is Ability {
  return component instanceof Ability
}

export function isRollTable(
  component: BaseComponentLike<ComponentLike>
): component is RollTable {
  return component instanceof RollTable
}
