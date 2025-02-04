import { BaseComponentLike } from './BaseComponentLike'
import { SystemModuleData } from './types'

export class System extends BaseComponentLike<SystemModuleData> {
  static rulesKey = 'systems'

  get activationCurrency() {
    return 'EP'
  }
}
