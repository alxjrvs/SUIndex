import { BaseComponentLike } from './baseComponentLike'
import { KeywordData } from './types'

export class Keyword extends BaseComponentLike<KeywordData> {
  static rulesKey = 'keywords'
}
