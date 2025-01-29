import { ReferencesHydrator } from './referencesHydrator'
import { TraitData } from './types'

export class Trait {
  static async fetch() {
    return ReferencesHydrator.getRules('traits')
  }
  static async all() {
    const data = await this.fetch()
    return data.map((d: any) => new this(d))
  }

  private data: TraitData
  public name: string
  public description: string

  constructor(data: TraitData) {
    this.data = data
    this.name = data.name
    this.description = data.description
  }
}
