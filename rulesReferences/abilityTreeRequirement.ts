import { ReferencesHydrator } from './referencesHydrator'
import { AbilityTreeRequirementData } from './types'

export class AbilityTreeRequirement {
  static async fetch() {
    return ReferencesHydrator.getRules('ability-tree-requirements')
  }

  static async all() {
    const data = await this.fetch()
    return data.map((d: any) => new this(d))
  }

  private data: AbilityTreeRequirementData
  public name: string
  public requirements: string[]

  constructor(data: AbilityTreeRequirementData) {
    this.data = data
    this.name = data.tree
    this.requirements = data.requirement
  }
}
