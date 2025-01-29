import { ReferencesHydrator } from './referencesHydrator'
import { RollTableData } from './types'

export class RollTable {
  static async fetch() {
    return ReferencesHydrator.getRules('tables')
  }
  static async all() {
    const data = await this.fetch()
    return data.map((d: any) => new this(d))
  }

  private data: RollTableData
  public name: string
  public section: string

  constructor(data: RollTableData) {
    this.data = data
    this.name = data.name
    this.section = data.section
  }
}
