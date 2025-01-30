import { ReferencesHydrator } from './referencesHydrator'
import { AbilityData } from './types'

export class Ability {
  static async fetch() {
    return ReferencesHydrator.getRules('abilities')
  }
  static async all() {
    const data = await this.fetch()
    return data.map((d: any) => new this(d))
  }

  private data: AbilityData

  constructor(data: AbilityData) {
    this.data = data
  }

  get name() {
    return this.data.name
  }

  get description() {
    return this.data.description
  }

  get level() {
    return this.data.level
  }

  get cost() {
    return this.data.activationCost
  }
}
