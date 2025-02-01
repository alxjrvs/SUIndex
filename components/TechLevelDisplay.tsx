import colors from '~/colors'
import { TechLevel } from '~/rulesReferences/types'
import { AppText } from './AppText'
import { PropsWithChildren } from 'react'

type Props = {
  techLevel: TechLevel
  invert?: boolean
  label?: string
}
export function TechLevelDisplay({ techLevel, label, invert = false }: Props) {
  if (!techLevel && !label) return null
  const display = label || `T${techLevel}`
  return <TechLevelWrapper invert={invert}>{display}</TechLevelWrapper>
}

export function TechLevelWrapper({
  children,
  invert,
}: PropsWithChildren<{ invert: boolean }>) {
  return (
    <AppText
      variant="bold"
      style={{
        color: invert ? colors.black : colors.white,
        backgroundColor: invert ? colors.white : colors.black,
        borderWidth: 1,
        borderColor: colors.black,
        minWidth: 25,
        height: 25,
        paddingTop: 2,
        textAlign: 'center',
        borderRadius: 5,
      }}
    >
      {children}
    </AppText>
  )
}
