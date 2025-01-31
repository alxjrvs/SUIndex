import { Ability } from '../../rulesReferences/Ability'
import { AbilityTreeRequirement } from '../../rulesReferences/AbilityTreeRequirement'
import { Equipment } from '../../rulesReferences/Equipment'
import { Keyword } from '../../rulesReferences/Keyword'
import { MechChassis } from '../../rulesReferences/MechChassis'
import { Module } from '../../rulesReferences/Module'
import { PlayerClass } from '../../rulesReferences/PlayerClass'
import { RollTable } from '../../rulesReferences/RollTable'
import { System } from '../../rulesReferences/System'
import { Trait } from '../../rulesReferences/Trait'

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
