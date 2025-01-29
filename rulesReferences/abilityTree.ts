import { ReferencesHydrator } from './referencesHydrator'

export class AbilityTree {
  static async fetch() {
    return ReferencesHydrator.getRules('abilityTree')
  }
}
