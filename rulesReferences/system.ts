import { ReferencesHydrator } from './referencesHydrator'
import { SystemModuleData } from './types'

export class System {
  static async fetch() {
    return ReferencesHydrator.getRules('systems')
  }
  static async all() {
    const data = await this.fetch()
    return data.map((d: any) => new this(d))
  }

  private data: SystemModuleData
  public name: string
  public description: string

  constructor(data: SystemModuleData) {
    this.data = data
    this.name = data.name
    this.description = data.description
  }
}
