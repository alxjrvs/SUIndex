import UserCrawlerForm from '~/components/forms/UserCrawlerForm'

export default function NewCrawler() {
  return (
    <UserCrawlerForm
      initialValues={{
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
            storage: [],
          },
          commandBay: {
            name: 'Command Bay',
            damaged: false,
            npcHP: 4,
            npcName: '',
            npcDescription: '',
          },
          mechBay: {
            name: 'Mech Bay',
            damaged: false,
            npcHP: 4,
            npcName: '',
            npcDescription: '',
          },
          armamentDay: {
            name: 'Armament Bay',
            damaged: false,
            npcHP: 4,
            npcName: '',
            npcDescription: '',
          },
          craftingBay: {
            name: 'Crafting Bay',
            damaged: false,
            npcHP: 4,
            npcName: '',
            npcDescription: '',
          },
          tradingBay: {
            name: 'Trading Bay',
            damaged: false,
            npcHP: 4,
            npcName: '',
            npcDescription: '',
          },
          medBay: {
            name: 'Med Bay',
            damaged: false,
            npcHP: 4,
            npcName: '',
            npcDescription: '',
          },
          pilotBay: {
            name: 'Pilot Bay',
            damaged: false,
            npcHP: 4,
            npcName: '',
            npcDescription: '',
          },
          armoury: {
            name: 'Armoury',
            damaged: false,
            npcHP: 4,
            npcName: '',
            npcDescription: '',
          },
          cantina: {
            name: 'Cantina',
            damaged: false,
            npcHP: 4,
            npcName: '',
            npcDescription: '',
          },
        },
      }}
      onSubmit={(foo) => {
        console.log(foo)
      }}
    />
  )
}
