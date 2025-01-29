import { Ability } from '../../rulesReferences/ability'
import { AbilityTreeRequirement } from '../../rulesReferences/abilityTreeRequirement'
import { Equipment } from '../../rulesReferences/equipment'
import { Keyword } from '../../rulesReferences/keyword'
import { MechChassis } from '../../rulesReferences/mechChassis'
import { Module } from '../../rulesReferences/module'
import { PlayerClass } from '../../rulesReferences/playerClass'
import { RollTable } from '../../rulesReferences/rollTable'
import { System } from '../../rulesReferences/system'
import { Trait } from '../../rulesReferences/trait'

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
