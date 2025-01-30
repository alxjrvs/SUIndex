import { RollTable } from '~/rulesReferences/rollTable'
import { ComponentContainer } from './ComponentContainer'
import MiniRollTableDisplay from './MiniRollTableDisplay'
import colors from '~/colors'

type Props = {
  rollTable: RollTable
}

export function RollTableDisplay({ rollTable }: Props) {
  return (
    <ComponentContainer
      style={{ borderColor: colors.SUOrange, borderWidth: 1 }}
      header={rollTable.name}
    >
      <MiniRollTableDisplay rollTable={rollTable.table} />
    </ComponentContainer>
  )
}
