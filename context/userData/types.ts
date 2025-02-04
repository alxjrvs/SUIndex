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

export type CrawlerBay = {
  name: string
  damaged: boolean
  npcHP: number
  npcName: string
  npcDescription: string
}

export type UserCrawlerData = {
  type: string
  techLevel: NumericTechLevel
  spDamage: number
  name: string
  description: string
  weaponSystem: string
  bays: {
    storage: CrawlerBay & { storage: Storage[] }
    commandBay: CrawlerBay
    mechBay: CrawlerBay
    armamentDay: CrawlerBay
    craftingBay: CrawlerBay
    tradingBay: CrawlerBay
    medBay: CrawlerBay
    pilotBay: CrawlerBay
    armoury: CrawlerBay
    cantina: CrawlerBay
  }
}
