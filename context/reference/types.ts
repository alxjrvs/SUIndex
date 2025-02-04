import { CrawlerType } from '~/context/reference/models/CrawlerType'
import { Ability } from './models/Ability'
import { AbilityTreeRequirement } from './models/AbilityTreeRequirement'
import { Equipment } from './models/Equipment'
import { Keyword } from './models/Keyword'
import { MechChassis } from './models/MechChassis'
import { Module } from './models/Module'
import { PlayerClass } from './models/PlayerClass'
import { RollTable } from './models/RollTable'
import { System } from './models/System'
import { Trait } from './models/Trait'

export type ReferenceState = {
  abilities: Ability[]
  abilityTreeRequirements: AbilityTreeRequirement[]
  equipments: Equipment[]
  crawlerTypes: CrawlerType[]
  keywords: Keyword[]
  mechChassis: MechChassis[]
  modules: Module[]
  playerClasses: PlayerClass[]
  systems: System[]
  traits: Trait[]
  rollTables: RollTable[]
}
