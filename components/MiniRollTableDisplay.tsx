import { View } from 'react-native'
import { AppText } from './AppText'
import { DobuleBorderView } from './DoubleBorderView'
import { DigestedRollTable } from '~/rulesReferences/types'

type Props = {
  rollTable: DigestedRollTable[]
}

export default function MiniRollTableDisplay({ rollTable }: Props) {
  return (
    <View style={{ gap: 15 }}>
      {rollTable.map(({ name, description, key }) => (
        <DobuleBorderView key={name + key}>
          <AppText>{description}</AppText>
          <AppText
            highlighted
            style={{
              position: 'absolute',
              top: -10,
            }}
            variant="bold"
          >
            {key} - {name}
          </AppText>
        </DobuleBorderView>
      ))}
    </View>
  )
}
