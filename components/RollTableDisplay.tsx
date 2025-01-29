import { RollTable } from '~/rulesReferences/rollTable'
import { AppText } from './AppText'
import { DobuleBorderView } from './DoubleBorderView'
import MiniRollTableDisplay from './MiniRollTableDisplay'

type Props = {
  rollTable: RollTable
}

export function RollTableDisplay({ rollTable }: Props) {
  return (
    <DobuleBorderView innerProps={{ style: { paddingTop: 20 } }}>
      <AppText
        highlighted
        style={{
          position: 'absolute',
          top: -10,
        }}
        variant="bold"
      >
        {rollTable.name}
      </AppText>
      <MiniRollTableDisplay rollTable={rollTable.table} />
    </DobuleBorderView>
  )
}
