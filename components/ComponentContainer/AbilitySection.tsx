import { View } from 'react-native'
import colors from '~/colors'
import { HydratedAbilities } from '~/rulesReferences/PlayerClass'
import { AppText } from '../AppText'
import { AbilityList } from './AbilityList'

export function AbilitySection({
  sectionTitle,
  abilities,
  headerColor,
}: {
  sectionTitle: string
  headerColor: (typeof colors)[keyof typeof colors]
  abilities: HydratedAbilities
}) {
  const abilitiesKeyArray = Object.keys(abilities)
  return (
    <View>
      <AppText
        style={{
          textTransform: 'uppercase',
          textAlign: 'center',
          fontSize: 20,
        }}
        variant="heavy"
        color={headerColor}
      >
        {sectionTitle}
      </AppText>
      <View style={{ gap: 5 }}>
        {abilitiesKeyArray.map((abilityKey) => {
          return (
            <AbilityList
              key={abilityKey}
              abilities={abilities[abilityKey]}
              headerColor={headerColor}
              abilityKey={abilityKey}
            />
          )
        })}
      </View>
    </View>
  )
}
