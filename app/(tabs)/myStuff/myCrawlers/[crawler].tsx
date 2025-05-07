import { ScrollView } from 'react-native-gesture-handler'
import colors from '~/colors'
import { AppText } from '~/components/AppText'
import { CollapsibleInfoRow } from '~/components/CollapsibleInfoRow'
import { ComponentContainer } from '~/components/ComponentContainer'
import { Frame } from '~/components/Frame'
import { useReference } from '~/context/reference/useReference'
import { createUserCrawler } from '~/context/userData/fixtures/createUserCrawler'

export default function CrawlerShow() {
  const { crawlerTypes, systems } = useReference()
  const haven = createUserCrawler({
    type: 'exploratory',
    name: '#812 Haven',
    description: 'A small exploratory crawler',
    weaponSystem: 'mechapult',
    techLevel: 3,
  })

  const crawlerType = crawlerTypes.find((c) =>
    c.name.toLowerCase().includes(haven.type.toLowerCase())
  )

  const weaponSystem = systems.find(
    (s) => s.name?.toLowerCase() === haven.weaponSystem.toLowerCase()
  )

  if (!crawlerType || !weaponSystem) return <AppText>Not found</AppText>

  return (
    <ScrollView contentContainerStyle={{ padding: 5, gap: 10 }}>
      <Frame
        header={haven.name}
        headerColor={colors.SUPink}
        description={haven.description}
      >
        <AppText>Weapon System</AppText>
        <CollapsibleInfoRow
          header={weaponSystem.name || ''}
          headerColor={colors.SUOrange}
        >
          <ComponentContainer component={weaponSystem} />
        </CollapsibleInfoRow>
      </Frame>
    </ScrollView>
  )
}
