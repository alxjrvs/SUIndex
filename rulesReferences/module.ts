import { DenseComponentLike } from '~/types'
import { ReferencesHydrator } from './referencesHydrator'
import { SystemModuleData } from './types'

export class Module implements DenseComponentLike {
  static async fetch() {
    return ReferencesHydrator.getRules('modules')
  }
  static async all() {
    const data = await this.fetch()
    return data.map((d: any) => new this(d))
  }

  private data: SystemModuleData

  constructor(data: SystemModuleData) {
    this.data = data
  }

  get name() {
    return this.data.name
  }
  get description() {
    return this.data.description
  }
  get techLevel(): 1 | 2 | 3 | 4 | 5 | 6 {
    if (!this.data.techLevel) return 1
    return this.data.techLevel as 1 | 2 | 3 | 4 | 5 | 6
  }

  get stats() {
    return []
  }

  get notes() {
    return this.data.notes
  }
}
