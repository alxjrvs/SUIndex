import { BaseComponentLike } from './BaseComponentLike'
import { PlayerClassData } from './types'

export class PlayerClass extends BaseComponentLike<PlayerClassData> {
  static rulesKey = 'classes'

  get activationCurrency() {
    return 'AP'
  }
}
