import { BaseComponentLike } from './BaseComponentLike'
import { DigestedRollTable, RollTableData } from './types'

export class RollTable extends BaseComponentLike<RollTableData> {
  static rulesKey = 'tables'

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

  get section() {
    return this.data.section
  }

  get table() {
    return RollTable.digestedRollTable(this.data.rollTable)
  }
}
