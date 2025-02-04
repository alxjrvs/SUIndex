import { ComponentLikeData } from './types'
import {
  formatActivationCost,
  generateDataListValues,
} from '~/utils/formatters'

export class ComponentAction {
  private action: ComponentLikeData
  private activationCurrency: string

  constructor(action: ComponentLikeData, activationCurrency: string) {
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
      activationCost: '',
      ...this.action,
      activationCurrency: this.activationCurrency,
    })
  }
}
