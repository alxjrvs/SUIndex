import colors from '~/colors'
import { AppText } from './AppText'
import { Triangle } from './Triangle'

type Props = {
  slotsRequired: number | undefined
}
export function RequiredSlotsDisplay({ slotsRequired }: Props) {
  if (!slotsRequired) return null
  return (
    <Triangle>
      <AppText
        variant="bold"
        style={{
          position: 'absolute',
          left: -4,
          top: 7.5,
          color: colors.white,
          textAlign: 'center',
        }}
      >
        {slotsRequired}
      </AppText>
    </Triangle>
  )
}
