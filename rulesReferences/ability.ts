import { BaseComponentLike } from './BaseComponentLike'
import { AbilityData } from './types'

export class Ability extends BaseComponentLike<AbilityData> {
  static rulesKey = 'abilities'

  get level() {
    return this.data.level
  }

  get activationCurrency() {
    return 'AP'
  }
}
