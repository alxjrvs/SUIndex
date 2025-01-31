import { View } from 'react-native'
import { DigestedRollTable } from '~/rulesReferences/types'
import { AppText } from './AppText'
import colors from '~/colors'

type Props = {
  rollTable: DigestedRollTable[]
  showCommand?: boolean
}

export default function MiniRollTableDisplay({
  rollTable,
  showCommand,
}: Props) {
  return (
    <View>
      {showCommand && (
        <AppText
          variant="bold"
          highlight={colors.black}
          style={{ marginBottom: 10 }}
        >
          ROLL THE DIE:
        </AppText>
      )}
      {rollTable.map(({ name, description, key }, index) => (
        <View
          key={key + name + index}
          style={{
            backgroundColor:
              index % 2 === 0 ? colors.SULightOrange : colors.white,
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
          <AppText
            variant="bold"
            style={{
              flex: 1,
              fontSize: 20,
              textAlign: 'center',
              alignSelf: 'center',
            }}
          >
            {key}
          </AppText>
          <View
            style={{
              flex: 4,
              flexDirection: 'row',
              flexWrap: 'wrap',
              paddingVertical: 5,
            }}
          >
            <AppText>
              <AppText variant="bold">{name}: </AppText>
              {description}
            </AppText>
          </View>
        </View>
      ))}
    </View>
  )
}
