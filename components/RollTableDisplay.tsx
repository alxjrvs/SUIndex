import { RollTable } from '~/rulesReferences/rollTable'
import MiniRollTableDisplay from './MiniRollTableDisplay'
import { ComponentContainer } from './ComponentContainer'

type Props = {
  rollTable: RollTable
}

export function RollTableDisplay({ rollTable }: Props) {
  return (
    <ComponentContainer hidePadding component={rollTable}>
      <MiniRollTableDisplay rollTable={rollTable.table} />
    </ComponentContainer>
  )
}
