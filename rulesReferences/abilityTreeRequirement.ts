import { BaseComponentLike } from './baseComponentLike'
import { ReferencesHydrator } from './referencesHydrator'
import { AbilityTreeRequirementData } from './types'

export class AbilityTreeRequirement extends BaseComponentLike<AbilityTreeRequirementData> {
  static rulesKey = 'ability-tree-requirements'

  get requirements() {
    return this.data.requirement
  }
}
