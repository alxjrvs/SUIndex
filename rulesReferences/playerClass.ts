import { ReferencesHydrator } from './referencesHydrator'
import { PlayerClassData } from './types'

export class PlayerClass {
  static async fetch() {
    return ReferencesHydrator.getRules('classes')
  }
  static async all() {
    const data = await this.fetch()
    return data.map((d: any) => new this(d))
  }

  private data: PlayerClassData
  public name: string
  public description: string

  constructor(data: PlayerClassData) {
    this.data = data
    this.name = data.name
    this.description = data.description
  }
}
