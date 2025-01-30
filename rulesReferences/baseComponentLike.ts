import { DataValue } from '~/types'
import { ReferencesHydrator } from './referencesHydrator'
import { ComponentLike, TechLevel } from './types'

export class BaseComponentLike<T extends ComponentLike> {
  static rulesKey = 'Not implemented'

  static async fetch() {
    if (this.rulesKey === 'Not implemented') {
      throw new Error('rulesKey not implemented')
    }
    return ReferencesHydrator.getRules(this.rulesKey)
  }

  static async all() {
    const data = await this.fetch()
    return data.map((d: any) => new this(d))
  }

  protected data: T
  constructor(data: T) {
    this.data = data
  }
  get name() {
    return String(this.data.name)
  }
  get description() {
    return String(this.data.description)
  }

  get techLevel(): TechLevel | undefined {
    if (!this.data.techLevel) return undefined
    return this.data.techLevel as 1 | 2 | 3 | 4 | 5 | 6
  }

  get traits() {
    if (!this.data.traits) return []
    return this.data.traits.map((t) => {
      return `${t.type}${t.amount !== undefined ? `(${t.amount})` : ''}`
    })
  }

  get details() {
    const details: DataValue[] = []

    if (this.activationCost) {
      details.push({ value: this.activationCost, bold: true })
    }

    if (this.actionType) {
      details.push({ value: this.actionType })
    }

    if (this.range) {
      details.push({ value: this.range })
    }

    if (this.damage) {
      details.push({ value: this.damage })
    }

    if (this.traits.length > 0) {
      this.traits.forEach((t) => {
        details.push({ value: t })
      })
    }

    return details
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

  get activationCurrency(): string {
    throw new Error('Not implemented')
  }
}
