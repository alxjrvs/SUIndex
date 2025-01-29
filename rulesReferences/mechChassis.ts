import { ReferencesHydrator } from './referencesHydrator'
import { EquipmentData, MechChassisData } from './types'

export class MechChassis {
  static async fetch() {
    return ReferencesHydrator.getRules('chassis')
  }
  static async all() {
    const data = await this.fetch()
    return data.map((d: any) => new this(d))
  }

  private data: MechChassisData
  public name: string
  public description: string

  constructor(data: MechChassisData) {
    this.data = data
    this.name = data.name
    this.description = data.description
  }
}
