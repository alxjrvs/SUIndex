import { EquipmentData } from './types'
import { BaseComponentLike } from './baseComponentLike'

export class Equipment extends BaseComponentLike<EquipmentData> {
  static rulesKey = 'equipment'

  get activationCurrency() {
    return 'AP'
  }
}
