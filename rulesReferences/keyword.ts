import { BaseComponentLike } from './BaseComponentLike'
import { KeywordData } from './types'

export class Keyword extends BaseComponentLike<KeywordData> {
  static rulesKey = 'keywords'
}
