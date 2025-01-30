import { BaseComponentLike } from './baseComponentLike'
import { AbilityData } from './types'

export class Ability extends BaseComponentLike<AbilityData> {
  static rulesKey = 'abilities'

  get level() {
    return this.data.level
  }
}
