import { capitalizeFirstLetter } from '~/utils/formatters'
import { BaseComponentLike } from './BaseComponentLike'
import { KeywordData } from './types'

export class Keyword extends BaseComponentLike<KeywordData> {
  static rulesKey = 'keywords'

  get activationCurrency() {
    return ''
  }

  get name() {
    return capitalizeFirstLetter(this.data.name)
  }
}
