import { AppText } from './AppText'
import { ComponentContainer } from './ComponentContainer'
import { DigestedRollTable } from '~/rulesReferences/types'

type Props = {
  rollTable: DigestedRollTable[]
}

export default function MiniRollTableDisplay({ rollTable }: Props) {
  return rollTable.map(({ name, description, key }) => (
    <ComponentContainer header={`${key} - ${name}`} key={name + key}>
      <AppText>{description}</AppText>
    </ComponentContainer>
  ))
}
