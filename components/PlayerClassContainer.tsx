import { PlayerClass } from '~/rulesReferences/PlayerClass'
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
  const coreAbilitiesArray = Object.keys(playerClass.coreAbilities)
  return (
    <ComponentContainer component={playerClass}>
      <View>
        <AppText
          style={{
            textTransform: 'uppercase',
            textAlign: 'center',
            fontSize: 20,
          }}
          variant="heavy"
          color={colors.SUBrick}
        >
          core abilities
        </AppText>
        {coreAbilitiesArray.map((abilityKey) => {
          const abilities = playerClass.coreAbilities[abilityKey]
          return (
            <CollapsibleInfoRow
              key={abilityKey}
              headerColor={colors.SUBrick}
              textColor={colors.white}
              header={`${abilityKey} Tree`}
            >
              <AbilityList abilities={abilities} />
            </CollapsibleInfoRow>
          )
        })}
      </View>
    </ComponentContainer>
  )
}

function AbilityList({ abilities }: { abilities: Ability[] }) {
  return (
    <View>
      {abilities
        .sort((a, b) => a.level - b.level)
        .map((ability) => (
          <ComponentContainer
            verticalBarBackground={colors.SUBrick}
            headerColor={colors.black}
            component={ability}
            key={ability.name}
          >
            <AppText>{ability.effect}</AppText>
          </ComponentContainer>
        ))}
    </View>
  )
}
