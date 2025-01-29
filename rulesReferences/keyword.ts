import { ReferencesHydrator } from './referencesHydrator'
import { KeywordData } from './types'

export class Keyword {
  static async fetch() {
    return ReferencesHydrator.getRules('keywords')
  }
  static async all() {
    const data = await this.fetch()
    return data.map((d: any) => new this(d))
  }

  private data: KeywordData
  public name: string
  public description: string

  constructor(data: KeywordData) {
    this.data = data
    this.name = data.name
    this.description = data.description
  }
}
