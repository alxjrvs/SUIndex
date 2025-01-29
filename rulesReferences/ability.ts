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
  public name: string
  public description: string

  constructor(data: AbilityData) {
    this.data = data
    this.name = data.name
    this.description = data.description
  }
}
