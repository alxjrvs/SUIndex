import { BaseComponentLike } from './BaseComponentLike'
import { ComponentAction } from './ComponentAction'
import { CrawlerTypeData } from './types'

export class CrawlerType extends BaseComponentLike<CrawlerTypeData> {
  static rulesKey = 'crawlers'

  get name() {
    return `${this.data.name} Crawler`
  }

  get abilities() {
    return this.data.abilities
  }
}
