import { Ability } from './Ability'
import { BaseComponentLike } from './BaseComponentLike'
import { PlayerClassData } from './types'

export type HydratedAbilities = {
  [key: string]: Ability[]
}
export class PlayerClass extends BaseComponentLike<PlayerClassData> {
  static rulesKey = 'classes'
  public coreAbilities: HydratedAbilities
  public legendaryAbilities: HydratedAbilities
  public advancedAbilities: Ability[]

  static async allHydrated(abilities: Ability[]) {
    const data = await this.fetch()
    return data.map((d: any) => {
      const pc = new this(d, abilities)

      return pc
    })
  }

  constructor(data: PlayerClassData, abilities: Ability[]) {
    super(data)

    this.coreAbilities = findAbilities(abilities, data.coreAbilities)
    this.legendaryAbilities = findAbilitiesByName(
      abilities,
      data.legendaryAbilities
    )
    this.advancedAbilities = filterAndSortByTree(
      abilities,
      data.advancedAbilities
    )
  }

  get isCore() {
    return this.data.type === 'core'
  }

  get isHybrid() {
    return this.data.type === 'hybrid'
  }

  get activationCurrency() {
    return 'AP'
  }
}

function findAbilities(abilities: Ability[], abilityKeys: string[]) {
  return abilityKeys.reduce((acc, key) => {
    acc[key] = filterAndSortByTree(abilities, key)
    return acc
  }, {} as HydratedAbilities)
}

function findAbilitiesByName(abilities: Ability[], abilityKeys: string[]) {
  return abilityKeys.reduce((acc, key) => {
    acc['Legendary Abilities'] ||= []
    const newAbility = findByName(abilities, key)
    newAbility && acc['Legendary Abilities'].push(newAbility)
    return acc
  }, {} as HydratedAbilities)
}

function findByName(abilities: Ability[], name: string) {
  return abilities.find((a) => a.name === name)
}

function filterAndSortByTree(abilities: Ability[], tree: string) {
  return abilities
    .filter((a) => a.tree === tree)
    .sort((a, b) => Number(a.level) - Number(b.level))
}
