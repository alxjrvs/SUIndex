import { DataValue } from '~/types'

export interface ComponentLike {
  name?: string
  description?: string
  techLevel?: TechLevel | undefined
  notes?: string
  traits?: { type: string; amount?: number }[]
  details?: DataValue[]
  activationCost?: number
  range?: string
  damage?: { amount: number; type: string }
  actionType?: string
}

export interface AbilityTreeRequirementData extends ComponentLike {
  tree: string
  requirement: string[]
}

export type TechLevel = 1 | 2 | 3 | 4 | 5 | 6

type BaseData = {
  name: string
  description: string
}

export type TraitData = BaseData
export type KeywordData = BaseData

export type TraitReference = {
  type: string
  amount?: number
}

export type AbilityData = BaseData & {
  tree: string
  level: number
  effect?: string
  activationCost?: number
  actionType?: string
  range?: string
  traits?: TraitReference[]
  rollTable?: RollTableReference
}

type RollTableReference = {
  [key: string]: string
}

type DamageData = {
  type: string
  amount: number
}

type StatBonusData = {
  stat: string
  bonus: number
}

type ActionData = {
  name: string
  activationCost: number
  range: string
  actionType: string
  description: string
  traits?: TraitReference[]
}

export type SystemModuleData = BaseData & {
  techLevel: TechLevel
  slotsRequired: number
  salvageValue: number
  range?: string
  damage?: DamageData
  traits?: TraitReference[]
  actionType?: string
  statBonus?: StatBonusData
  recommended?: boolean
  rollTable?: RollTableReference
  notes?: string
  activationCost?: number
  actions?: ActionData[]
}

export type EquipmentData = BaseData & {
  name: string
  description: string
  techLevel?: TechLevel
  traits?: TraitReference[]
  damage?: DamageData
  activationCost?: number
  actionType?: string
  range?: string
  notes?: string
}

export type RollTableData = {
  name: string
  section: string
  rollTable: RollTableReference
}

type ChassisStats = {
  structure_pts: number
  energy_pts: number
  heat_cap: number
  system_slots: number
  module_slots: number
  cargo_cap: number
  tech_level: number
  salvage_value: number
}

type PatternReference = {
  name: string
  description: string
  systems: string[]
  modules: string[]
}

export type MechChassisData = {
  name: string
  stats: ChassisStats
  chassis_ability: string
  description: string
  patterns: PatternReference[]
}

export type PlayerClassData = BaseData & {
  type: string
  coreClasses: string[]
  coreAbilities: string[]
  advancedAbilities: string
  legendaryAbilities: string[]
}

export type DigestedRollTable = {
  order: number
  name: string
  description: string
  key: string
}
