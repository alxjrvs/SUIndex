import colors from '~/colors'
import { AppText } from './AppText'

type Props = {
  salvageValue: number | undefined
}
export function SalvageValueDisplay({ salvageValue }: Props) {
  if (!salvageValue) return null
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
        borderRadius: 30,
      }}
    >
      {salvageValue}
    </AppText>
  )
}
