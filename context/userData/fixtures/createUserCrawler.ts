import { UserCrawlerData } from '../types'

export function createUserCrawler(
  override: Partial<UserCrawlerData> = {}
): UserCrawlerData {
  return {
    type: '',
    techLevel: 1,
    spDamage: 0,
    name: '',
    description: '',
    weaponSystem: '',
    bays: {
      storage: {
        name: 'Storage Bay',
        damaged: false,
        npcHP: 4,
        npcName: '',
        npcDescription: '',
        storage: [...(override?.bays?.storage?.storage || [])],
        ...override.bays?.storage,
      },
      commandBay: {
        name: 'Command Bay',
        damaged: false,
        npcHP: 4,
        npcName: '',
        npcDescription: '',
        ...override.bays?.commandBay,
      },
      mechBay: {
        name: 'Mech Bay',
        damaged: false,
        npcHP: 4,
        npcName: '',
        npcDescription: '',
        ...override.bays?.mechBay,
      },
      armamentDay: {
        name: 'Armament Bay',
        damaged: false,
        npcHP: 4,
        npcName: '',
        npcDescription: '',
        ...override.bays?.armamentDay,
      },
      craftingBay: {
        name: 'Crafting Bay',
        damaged: false,
        npcHP: 4,
        npcName: '',
        npcDescription: '',
        ...override.bays?.craftingBay,
      },
      tradingBay: {
        name: 'Trading Bay',
        damaged: false,
        npcHP: 4,
        npcName: '',
        npcDescription: '',
        ...override.bays?.tradingBay,
      },
      medBay: {
        name: 'Med Bay',
        damaged: false,
        npcHP: 4,
        npcName: '',
        npcDescription: '',
        ...override.bays?.medBay,
      },
      pilotBay: {
        name: 'Pilot Bay',
        damaged: false,
        npcHP: 4,
        npcName: '',
        npcDescription: '',
        ...override.bays?.pilotBay,
      },
      armoury: {
        name: 'Armoury',
        damaged: false,
        npcHP: 4,
        npcName: '',
        npcDescription: '',
        ...override.bays?.armoury,
      },
      cantina: {
        name: 'Cantina',
        damaged: false,
        npcHP: 4,
        npcName: '',
        npcDescription: '',
        ...override.bays?.cantina,
      },
      ...override.bays,
    },
    ...override,
  }
}
