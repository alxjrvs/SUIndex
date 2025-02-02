import { HydratedAbilities, PlayerClass } from '~/rulesReferences/PlayerClass'
import { ComponentContainer } from './ComponentContainer'
import { AppText } from './AppText'
import colors from '~/colors'
import { Ability } from '~/rulesReferences/Ability'
import { View } from 'react-native'
import { CollapsibleInfoRow } from './CollapsibleInfoRow'

type Props = {
  playerClass: PlayerClass
}
export function PlayerClassContainer({ playerClass }: Props) {
  return (
    <ComponentContainer component={playerClass}>
      <AbilitySection
        headerColor={colors.SUBrick}
        sectionTitle="Core Abilities"
        abilities={playerClass.coreAbilities}
      />
      {playerClass.advancedAbilities.length > 0 && (
        <AbilitySection
          headerColor={colors.SUOrange}
          sectionTitle="Advanced Abilities"
          abilities={{
            ['Advanced Abilities']: playerClass.advancedAbilities,
          }}
        />
      )}
      {Object.values(playerClass.legendaryAbilities).length > 0 && (
        <AbilitySection
          headerColor={colors.SUPink}
          sectionTitle="Legendary Abilities"
          abilities={playerClass.legendaryAbilities}
        />
      )}
    </ComponentContainer>
  )
}

function AbilitySection({
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
  )
}

function AbilityList({
  abilities,
  abilityKey,
  headerColor,
}: {
  abilities: Ability[]
  abilityKey: string
  headerColor: (typeof colors)[keyof typeof colors]
}) {
  return (
    <CollapsibleInfoRow
      key={abilityKey}
      headerColor={headerColor}
      textColor={colors.white}
      header={`${abilityKey} Tree`}
    >
      <View>
        {abilities
          .sort((a, b) => Number(a.level) - Number(b.level))
          .map((ability) => (
            <ComponentContainer
              verticalBarBackground={headerColor}
              headerColor={colors.black}
              component={ability}
              key={ability.name}
            >
              <AppText>{ability.effect}</AppText>
            </ComponentContainer>
          ))}
      </View>
    </CollapsibleInfoRow>
  )
}
