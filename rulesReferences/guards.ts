import { Ability } from './Ability'
import { BaseComponentLike } from './BaseComponentLike'
import { CrawlerType } from './CrawlerType'
import { MechChassis } from './MechChassis'
import { PlayerClass } from './PlayerClass'
import { RollTable } from './RollTable'
import { Trait } from './Trait'
import { ComponentLikeData } from './types'

export function isCrawlerType(
  component: BaseComponentLike<ComponentLikeData>
): component is CrawlerType {
  return component instanceof CrawlerType
}

export function isMechChassis(
  component: BaseComponentLike<ComponentLikeData>
): component is MechChassis {
  return component instanceof MechChassis
}

export function isAbility(
  component: BaseComponentLike<ComponentLikeData>
): component is Ability {
  return component instanceof Ability
}

export function isTrait(
  component: BaseComponentLike<ComponentLikeData>
): component is Trait {
  return component instanceof Trait
}

export function isPlayerClass(
  component: BaseComponentLike<ComponentLikeData>
): component is PlayerClass {
  return component instanceof PlayerClass
}

export function isRollTable(
  component: BaseComponentLike<ComponentLikeData>
): component is RollTable {
  return component instanceof RollTable
}
