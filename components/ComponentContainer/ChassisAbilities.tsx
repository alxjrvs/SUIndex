import { View } from 'react-native'
import colors from '~/colors'
import { MechChassis } from '~/context/reference/models/MechChassis'
import { AppText } from '../AppText'
import { ActionData } from '~/context/reference/models/types'
import { DataList } from '../DataList'
import { generateDataListValues } from '~/utils/formatters'
import { ChassisStats } from './ChassisStats'
import MiniRollTableDisplay from '../MiniRollTableDisplay'
import { RollTable } from '~/context/reference/models/RollTable'

export function ChassisAbilities({
  abilities,
}: {
  abilities: MechChassis['abilities']
}) {
  return (
    <View
      style={{
        padding: 5,
        gap: 5,
        borderWidth: 1,
        borderColor: colors.black,
        justifyContent: 'center',
      }}
    >
      {abilities.map((ability, index) => (
        <ChassisAbility
          key={String(ability?.description) + index}
          ability={ability}
        />
      ))}
    </View>
  )
}

function ChassisAbility({ ability }: { ability: Partial<ActionData> }) {
  const newlineDescription = !!ability.activationCost
  const dataListValues = generateDataListValues({
    ...ability,
    activationCurrency: 'EP',
  })

  const description = ability.description?.replaceAll('•', '\n•')
  return (
    <View style={{ gap: 5 }}>
      <AppText>
        {ability.name && <AppText variant="bold">{ability.name}:</AppText>}
        <DataList values={dataListValues} />
        {newlineDescription ? null : description}
      </AppText>
      <AppText>{newlineDescription ? description : null}</AppText>
      {ability.options?.map((option, index) => (
        <AppText key={String(option?.label) + index}>
          <AppText variant="bold">
            {option.label}
            {option.label.includes('•') || option.label.length === 0
              ? null
              : ':'}
          </AppText>
          {option.value}
        </AppText>
      ))}
      <ChassisStats stats={ability.stats} up />
      {ability.rollTable && (
        <MiniRollTableDisplay
          rollTable={RollTable.digestedRollTable(ability.rollTable)}
        />
      )}
    </View>
  )
}
