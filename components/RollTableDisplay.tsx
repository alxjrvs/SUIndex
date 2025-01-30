import { RollTable } from '~/rulesReferences/rollTable'
import { ComponentContainer } from './ComponentContainer'
import MiniRollTableDisplay from './MiniRollTableDisplay'

type Props = {
  rollTable: RollTable
}

export function RollTableDisplay({ rollTable }: Props) {
  return (
    <ComponentContainer hidePadding header={rollTable.name}>
      <MiniRollTableDisplay rollTable={rollTable.table} />
    </ComponentContainer>
  )
}
