import { DataValue } from '~/types'

export interface ComponentLike {
  name?: string
  description?: string
  slotsRequired?: number
  techLevel?: TechLevel | undefined
  notes?: string
  traits?: { type: string; amount?: number }[]
  details?: DataValue[]
  activationCost?: number | string
  range?: string
  damage?: DamageData
  actionType?: string
  salvageValue?: number
  rollTable?: RollTableReference
  actions?: ActionData[]
}

export interface AbilityTreeRequirementData extends ComponentLike {
  tree: string
  requirement: string[]
}

export type TechLevel = 1 | 2 | 3 | 4 | 5 | 6 | undefined

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
  amount: number | string
}

type StatBonusData = {
  stat: string
  bonus: number
}

export type ActionData = BaseData & {
  activationCost: number | string
  range: string
  actionType: string
  traits?: TraitReference[]
  damage?: DamageData
  rollTable?: RollTableReference
  options: { label: string; value: string }[]
  stats?: ChassisStats
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
  techLevel?: TechLevel
  traits?: TraitReference[]
  damage?: DamageData
  activationCost?: number
  rollTable?: RollTableReference
  actionType?: string
  range?: string
  notes?: string
}

export type RollTableData = {
  name: string
  section: string
  rollTable: RollTableReference
}

export type ChassisStats = {
  structure_pts: number
  energy_pts: number
  heat_cap: number
  system_slots: number
  module_slots: number
  cargo_cap: number
  tech_level: number
  salvage_value: number
  notes?: string
}

type PatternReference = BaseData & {
  systems: string[]
  modules: string[]
}

export type MechChassisData = BaseData & {
  stats: ChassisStats
  chassis_abilities: Partial<ActionData>[]
  patterns: PatternReference[]
}

export type PlayerClassData = BaseData & {
  type: string
  coreClasses: string[]
  coreAbilities: string[]
  advancedAbilities: string
  legendaryAbilities: string[]
}

export type DigestedRollTable = BaseData & {
  order: number
  key: string
}
