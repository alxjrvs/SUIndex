import colors from '~/colors'
import { TechLevel } from '~/rulesReferences/types'
import { AppText } from './AppText'

type Props = {
  techLevel: TechLevel
}
export function TechLevelDisplay({ techLevel }: Props) {
  if (!techLevel) return null
  return (
    <AppText
      variant="bold"
      style={{
        color: colors.white,
        backgroundColor: colors.black,
        width: 25,
        height: 25,
        textAlign: 'center',
        paddingTop: 4,
        borderRadius: 5,
      }}
    >
      T{techLevel}
    </AppText>
  )
}
