import { ComponentAction } from './ComponentAction'
import { ReferencesHydrator } from './ReferencesHydrator'
import { ComponentLike, TechLevel } from './types'
import { generateDataListValues } from '~/utils/formatters'

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
    return this.data.name
  }
  get description() {
    return this.data.description
  }

  get techLevel(): TechLevel | undefined {
    return this.data.techLevel as TechLevel
  }

  get traits() {
    return this.data.traits
  }

  get details() {
    return generateDataListValues({
      ...this.data,
      activationCurrency: this.activationCurrency,
    })
  }

  get recommended() {
    return !!this.data.recommended
  }

  get activationCost() {
    return this.data.activationCost
  }

  get range() {
    return this.data.range
  }

  get damage() {
    return this.data.damage
  }

  get rollTable() {
    return this.data.rollTable
  }

  get actionType() {
    return this.data.actionType
  }

  get notes() {
    return this.data.notes
  }

  get salvageValue() {
    return this.data.salvageValue
  }

  get slotsRequired() {
    return this.data.slotsRequired
  }

  get actions() {
    if (!this.data.actions) return []
    return this.data.actions.map(
      (a) => new ComponentAction(a, this.activationCurrency)
    )
  }

  get activationCurrency(): string {
    throw new Error('Not implemented')
  }
}
