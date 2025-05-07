import { NumericTechLevel } from '~/context/reference/models/types'

export type UserDataState = {
  mechs: unknown[]
  crawlers: unknown[]
  pilots: unknown[]
}

export type ContextValue = [
  UserDataState,
  React.Dispatch<React.SetStateAction<UserDataState>>,
]

export type Storage = {
  name: string
  description: string
  techLevel: NumericTechLevel
  salvageValue: number
}

type NpcData = {
  name: string
  description: string
  hp: number
}

export type CrawlerBay = {
  name: string
  damaged: boolean
  npc: NpcData
}

export type UserCrawlerData = {
  type: string
  npc: NpcData
  techLevel: NumericTechLevel
  sp: number
  name: string
  description: string
  weaponSystem: string
}
