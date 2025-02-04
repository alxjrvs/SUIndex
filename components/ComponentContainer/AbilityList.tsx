import { View } from 'react-native'
import colors from '~/colors'
import { Ability } from '~/context/reference/models/Ability'
import { AppText } from '../AppText'
import { CollapsibleInfoRow } from '../CollapsibleInfoRow'
import { ComponentFrame } from './ComponentFrame'

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
      <View style={{ borderBottomWidth: 35, borderBottomColor: headerColor }}>
        {abilities
          .sort((a, b) => Number(a.level) - Number(b.level))
          .map((ability) => (
            <ComponentFrame
              verticalBarBackground={headerColor}
              headerColor={colors.black}
              component={ability}
              key={ability.name}
            >
              <AppText>{ability.effect}</AppText>
            </ComponentFrame>
          ))}
      </View>
    </CollapsibleInfoRow>
  )
}
