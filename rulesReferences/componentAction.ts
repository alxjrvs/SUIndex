import { ActionData } from './types'
import {
  formatActivationCost,
  generateDataListValues,
} from '~/utils/formatters'

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
    return generateDataListValues({
      ...this.action,
      activationCost: '',
      activationCurrency: '',
    })
  }

  get rollTable() {
    if (!this.action.rollTable) return undefined
    return this.action.rollTable
  }

  get activationCost() {
    return formatActivationCost({
      ...this.action,
      activationCurrency: this.activationCurrency,
    })
  }
}
