import { View } from 'react-native'
import colors from '~/colors'
import { Ability } from '~/rulesReferences/Ability'
import { ComponentContainer } from '.'
import { AppText } from '../AppText'
import { CollapsibleInfoRow } from '../CollapsibleInfoRow'

export function AbilityList({
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
