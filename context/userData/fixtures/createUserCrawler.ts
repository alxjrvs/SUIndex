import { CrawlerBay, UserCrawlerData } from '../types'

export function createUserCrawler(
  override: Partial<UserCrawlerData> = {}
): UserCrawlerData {
  const defaultBays: CrawlerBay[] = [
    {
      name: 'Forward Bay',
      damaged: false,
      npc: {
        name: 'Mechanic',
        description: 'Keeps the crawler running',
        hp: 3,
      },
    },
    {
      name: 'Aft Bay',
      damaged: true,
      npc: { name: 'Navigator', description: 'Charts the course', hp: 2 },
    },
  ]

  return {
    type: '',
    techLevel: 1,
    sp: 20,
    name: '',
    description: '',
    weaponSystem: '',
    bays: defaultBays,
    npc: { name: '', description: '', hp: 4, ...(override.npc || {}) },
    ...override,
  }
}
