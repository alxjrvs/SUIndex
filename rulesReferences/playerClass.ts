import { Ability } from './Ability'
import { BaseComponentLike } from './BaseComponentLike'
import { PlayerClassData } from './types'

type HydratedAbilities = {
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
    this.legendaryAbilities = findAbilities(abilities, data.coreAbilities)
    this.advancedAbilities = filterAndSortByTree(
      abilities,
      data.advancedAbilities
    )
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

function filterAndSortByTree(abilities: Ability[], tree: string) {
  return abilities
    .filter((a) => a.tree === tree)
    .sort((a, b) => a.level - b.level)
}
