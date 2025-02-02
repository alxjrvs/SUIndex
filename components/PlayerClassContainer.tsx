import { PlayerClass } from '~/rulesReferences/PlayerClass'
import { ComponentContainer } from './ComponentContainer'
import { AppText } from './AppText'
import colors from '~/colors'
import { Ability } from '~/rulesReferences/Ability'
import { View } from 'react-native'

type Props = {
  playerClass: PlayerClass
}
export function PlayerClassContainer({ playerClass }: Props) {
  const coreAbilitiesArray = Object.keys(playerClass.coreAbilities)
  return (
    <ComponentContainer component={playerClass}>
      <AppText color={colors.SUBrick}>core abilities</AppText>
      <View>
        {coreAbilitiesArray.map((ability) => (
          <View style={{ flex: 1 }} key={ability}>
            <AppText key={ability}>{ability}</AppText>
            <AbilityList abilities={playerClass.coreAbilities[ability]} />
          </View>
        ))}
      </View>
    </ComponentContainer>
  )
}

function AbilityCell({ ability }: { ability: Ability }) {
  return (
    <View>
      <AppText>{ability.name}</AppText>
      <AppText>{ability.description}</AppText>
    </View>
  )
}

function AbilityList({ abilities }: { abilities: Ability[] }) {
  return (
    <View>
      {abilities
        .sort((a, b) => a.level - b.level)
        .map((ability) => (
          <AbilityCell key={ability.name} ability={ability} />
        ))}
    </View>
  )
}
