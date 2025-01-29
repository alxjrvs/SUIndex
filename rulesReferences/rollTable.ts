import { ReferencesHydrator } from './referencesHydrator'
import { DigestedRollTable, RollTableData } from './types'

export class RollTable {
  static async fetch() {
    return ReferencesHydrator.getRules('tables')
  }
  static async all() {
    const data = await this.fetch()
    return data.map((d: any) => new this(d))
  }
  static digestedRollTable(
    tables: Record<string, string>
  ): DigestedRollTable[] {
    const sorted = Object.keys(tables)
      .sort((a, b) => {
        const aNum = parseInt(a.split('-')[0])
        const bNum = parseInt(b.split('-')[0])
        return aNum - bNum
      })
      .reverse()
    return sorted.map((key, order) => {
      const fullDescription = tables[key]
      const name = fullDescription.split(':')[0]
      const description = fullDescription.replace(`${name}:`, '').trim()

      return {
        order,
        name,
        description,
        key,
      }
    })
  }

  private data: RollTableData
  public name: string
  public section: string
  public table: DigestedRollTable[]

  constructor(data: RollTableData) {
    this.data = data
    this.name = data.name
    this.section = data.section
    this.table = RollTable.digestedRollTable(data.rollTable)
  }
}
