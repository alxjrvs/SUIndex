import { BaseComponentLike } from './BaseComponentLike'
import { MechChassisData, TechLevel } from './types'

export class MechChassis extends BaseComponentLike<MechChassisData> {
  static rulesKey = 'chassis'

  get activationCurrency() {
    return 'EP'
  }

  get techLevel() {
    return this.data.stats.tech_level as TechLevel
  }

  get abilities() {
    return this.data.chassis_abilities
  }

  get stats() {
    return this.data.stats
  }

  get patterns() {
    return this.data.patterns
  }
}
