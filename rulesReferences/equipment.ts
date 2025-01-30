import { DataValue, DenseComponentLike } from '~/types'
import { ReferencesHydrator } from './referencesHydrator'
import { EquipmentData } from './types'

export class Equipment implements DenseComponentLike {
  static async fetch() {
    return ReferencesHydrator.getRules('equipment')
  }
  static async all() {
    const data = await this.fetch()
    return data.map((d: any) => new this(d))
  }

  private data: EquipmentData
  constructor(data: EquipmentData) {
    this.data = data
  }

  get name() {
    return this.data.name
  }
  get description() {
    return this.data.description
  }

  get techLevel(): 1 | 2 | 3 | 4 | 5 | 6 {
    if (!this.data.techLevel) return 1
    return this.data.techLevel as 1 | 2 | 3 | 4 | 5 | 6
  }

  get traits() {
    if (!this.data.traits) return []
    return this.data.traits.map((t) => {
      return `${t.type}${t.amount !== undefined ? `(${t.amount})` : ''}`
    })
  }

  get stats() {
    const stats: DataValue[] = []

    if (this.activationCost) {
      stats.push({ value: this.activationCost, bold: true })
    }

    if (this.actionType) {
      stats.push({ value: this.actionType })
    }

    if (this.range) {
      stats.push({ value: this.range })
    }

    if (this.damage) {
      stats.push({ value: this.damage })
    }

    if (this.traits.length > 0) {
      this.traits.forEach((t) => {
        stats.push({ value: t })
      })
    }

    return stats
  }

  get activationCost() {
    if (!this.data.activationCost) return undefined
    return `${this.data.activationCost}${this.activationCurrency}`
  }

  get range() {
    if (!this.data.range) return undefined
    return `Range:${this.data.range}`
  }

  get damage() {
    if (!this.data.damage) return undefined
    return `Damage:${this.data.damage.amount}${this.data.damage.type}`
  }

  get actionType() {
    if (!this.data.actionType) return undefined
    if (this.data.actionType.includes('action')) {
      return this.data.actionType
    }
    return `${this.data.actionType} Action`
  }

  get notes() {
    if (!this.data.notes) return undefined
    return this.data.notes
  }

  private get activationCurrency() {
    return 'AP'
  }
}
