import { BaseComponentLike } from './BaseComponentLike'
import { TraitData } from './types'

export class Trait extends BaseComponentLike<TraitData> {
  static rulesKey = 'traits'
}
