import { BaseComponentLike } from './BaseComponentLike'
import { AbilityTreeRequirementData } from './types'

export class AbilityTreeRequirement extends BaseComponentLike<AbilityTreeRequirementData> {
  static rulesKey = 'ability-tree-requirements'

  get requirements() {
    return this.data.requirement
  }
}
