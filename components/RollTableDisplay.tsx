import { RollTable } from '~/context/reference/models/RollTable'
import { ComponentContainer } from './ComponentContainer'

type Props = {
  rollTable: RollTable
}

export function RollTableDisplay({ rollTable }: Props) {
  return <ComponentContainer hidePadding component={rollTable} />
}
