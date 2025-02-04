import { EquipmentData } from './types'
import { BaseComponentLike } from './BaseComponentLike'

export class Equipment extends BaseComponentLike<EquipmentData> {
  static rulesKey = 'equipment'

  get activationCurrency() {
    return 'AP'
  }
}
