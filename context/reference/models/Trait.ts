import { capitalizeFirstLetter } from '~/utils/formatters'
import { BaseComponentLike } from './BaseComponentLike'
import { TraitData } from './types'

export class Trait extends BaseComponentLike<TraitData> {
  static rulesKey = 'traits'

  get activationCurrency() {
    return ''
  }

  get name() {
    return capitalizeFirstLetter(this.data.name)
  }
}
