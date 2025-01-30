import { BaseComponentLike } from './baseComponentLike'
import { MechChassisData } from './types'

export class MechChassis extends BaseComponentLike<MechChassisData> {
  static rulesKey = 'chassis'

  get activationCurrency() {
    return 'EP'
  }
}
