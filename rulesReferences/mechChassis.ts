import { BaseComponentLike } from './BaseComponentLike'
import { MechChassisData } from './types'

export class MechChassis extends BaseComponentLike<MechChassisData> {
  static rulesKey = 'chassis'

  get activationCurrency() {
    return 'EP'
  }

  get abilities() {
    return this.data.chassis_abilities
  }

  get stats() {
    return this.data.stats
  }
}
