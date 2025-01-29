import { ReferencesHydrator } from './referencesHydrator'
import { EquipmentData } from './types'

export class Equipment {
  static async fetch() {
    return ReferencesHydrator.getRules('equipment')
  }
  static async all() {
    const data = await this.fetch()
    return data.map((d: any) => new this(d))
  }

  private data: EquipmentData
  public name: string
  public description: string

  constructor(data: EquipmentData) {
    this.data = data
    this.name = data.name
    this.description = data.description
  }
}
