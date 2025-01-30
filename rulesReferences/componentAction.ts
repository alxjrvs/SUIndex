import { DataValue } from '~/types'
import { ActionData } from './types'

export class ComponentAction {
  private action: ActionData
  private activationCurrency: string

  constructor(action: ActionData, activationCurrency: string) {
    this.action = action
    this.activationCurrency = activationCurrency
  }

  get name() {
    return String(this.action.name)
  }
  get description() {
    return String(this.action.description)
  }

  get details() {
    const details: DataValue[] = []

    if (this.actionType) {
      details.push({ value: this.actionType })
    }

    if (this.range) {
      details.push({ value: this.range })
    }

    if (this.traits.length > 0) {
      this.traits.forEach((t) => {
        details.push({ value: t })
      })
    }

    return details
  }

  get actionType() {
    if (!this.action.actionType) return undefined
    if (
      this.action.actionType.includes('action') ||
      this.action.actionType.includes('Passive')
    ) {
      return this.action.actionType
    }
    return `${this.action.actionType} Action`
  }

  get range() {
    if (!this.action.range) return undefined
    return `Range:${this.action.range}`
  }

  get activationCost() {
    if (this.name.includes('Detector')) {
      console.log('HERE')
      console.log(this.action.activationCost)
    }
    if (!this.action.activationCost) return undefined
    const cost =
      String(this.action.activationCost).toLowerCase() === 'variable'
        ? 'X'
        : this.action.activationCost
    return `${cost}${this.activationCurrency}`
  }

  get traits() {
    if (!this.action.traits) return []
    return this.action.traits.map((t) => {
      return `${t.type}${t.amount !== undefined ? `(${t.amount})` : ''}`
    })
  }
}
