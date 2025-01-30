import { SystemModuleData } from './types'
import { BaseComponentLike } from './baseComponentLike'

export class Module extends BaseComponentLike<SystemModuleData> {
  static rulesKey = 'modules'

  get activationCurrency() {
    return 'EP'
  }
}
