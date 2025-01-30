import { BaseComponentLike } from './baseComponentLike'
import { PlayerClassData } from './types'

export class PlayerClass extends BaseComponentLike<PlayerClassData> {
  static rulesKey = 'classes'
}
