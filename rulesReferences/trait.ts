import { BaseComponentLike } from './baseComponentLike'
import { TraitData } from './types'

export class Trait extends BaseComponentLike<TraitData> {
  static rulesKey = 'traits'
}
