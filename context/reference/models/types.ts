import { DataValue } from '~/types'

export type TechLevel = 1 | 2 | 3 | 4 | 5 | 6 | undefined
export type NumericTechLevel = Exclude<TechLevel, undefined>

export interface ComponentLikeData {
  name?: string
  description?: string
  slotsRequired?: number
  techLevel?: TechLevel | undefined
  notes?: string
  traits?: TraitReference[]
  details?: DataValue[]
  activationCost?: number | string
  recommended?: boolean
  range?: string
  damage?: DamageData
  actionType?: string
  salvageValue?: number
  rollTable?: RollTableReference
  actions?: ComponentLikeData[]
  stats?: ChassisStats
}

interface BaseData extends ComponentLikeData {
  name: string
  description: string
}

export interface AbilityTreeRequirementData extends ComponentLikeData {
  tree: string | number
  requirement: string[]
}

export type TraitData = BaseData
export type KeywordData = BaseData

export interface TraitReference {
  type: string
  amount?: number
}

type RollTableReference = {
  [key: string]: string
}

export interface AbilityData extends BaseData {
  tree: string
  level: number | string
  effect?: string
}

interface DamageData {
  type: string
  amount: number | string
}

interface StatBonusData {
  stat: string
  bonus: number
}

export interface SystemModuleData extends BaseData {
  techLevel: TechLevel
  slotsRequired: number
  salvageValue: number
  range?: string
  damage?: DamageData
  traits?: TraitReference[]
  actionType?: string
  statBonus?: StatBonusData
  rollTable?: RollTableReference
  notes?: string
  activationCost?: number
  actions?: ComponentLikeData[]
}

export interface EquipmentData extends BaseData {
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

type CorePattern = {
  systems: string[]
  modules: string[]
}

export interface DigestedRollTable extends BaseData {
  order: number
  key: string
}

export type PatternReference = BaseData &
  CorePattern & {
    legalStarting?: boolean
    drone?: CorePattern
  }

export interface MechChassisData extends BaseData {
  stats: ChassisStats
  chassis_abilities: Partial<ComponentLikeData>[]
  patterns: PatternReference[]
}

export interface PlayerClassData extends BaseData {
  type: string
  coreClasses: string[]
  coreAbilities: string[]
  advancedAbilities: string
  legendaryAbilities: string[]
}

export interface CrawlerTypeData extends BaseData {
  abilities: ComponentLikeData[]
}
