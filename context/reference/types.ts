import { Ability } from '../ability'
import { AbilityTreeRequirement } from '../abilityTreeRequirement'
import { Equipment } from '../equipment'
import { Keyword } from '../keyword'
import { MechChassis } from '../mechChassis'
import { Module } from '../module'
import { PlayerClass } from '../playerClass'
import { RollTable } from '../rollTable'
import { System } from '../system'
import { Trait } from '../trait'

export type ReferenceState = {
  abilities: Ability[]
  abilityTreeRequirements: AbilityTreeRequirement[]
  equipments: Equipment[]
  keywords: Keyword[]
  mechChassis: MechChassis[]
  modules: Module[]
  playerClasses: PlayerClass[]
  systems: System[]
  traits: Trait[]
  rollTables: RollTable[]
}
