import { View } from 'react-native'
import colors from '~/colors'
import { AppText } from './AppText'
import { TechLevel } from '~/context/reference/models/types'
import { PropsWithChildren } from 'react'

type Display = {
  label: string
  value: string | number
}

type Props = {
  stats: Display[] | undefined
  notes?: string
  up?: boolean
}

export function StatList({ stats, up = false, notes }: Props) {
  if (!stats) return null

  return (
    <View>
      {!up && notes && <AppText variant="bold">{notes}</AppText>}
      <View
        style={[
          up && {
            paddingTop: 80,
          },
          {
            overflow: 'visible',
            flexDirection: 'row',
          },
        ]}
      >
        {stats.map(({ label, value }, index) => (
          <Stat key={`${value}-${index}`} up={up} label={label} value={value} />
        ))}
      </View>
      {up && notes && <AppText variant="bold">{notes}</AppText>}
    </View>
  )
}

function Stat({
  label,
  value,
  up,
}: {
  label: string
  value: number | string | TechLevel
  up: boolean
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        position: 'relative',
      }}
    >
      {up ? (
        <>
          <StatLabel up={up}>{label}</StatLabel>
          <StatValue>{value}</StatValue>
        </>
      ) : (
        <>
          <StatLabel up={up}>{label}</StatLabel>
          <StatValue>{value}</StatValue>
        </>
      )}
    </View>
  )
}

function StatValue({ children }: PropsWithChildren) {
  return (
    <AppText
      style={{
        textAlign: 'center',
        backgroundColor: colors.white,
        width: 30,
        maxWidth: 30,
        minWidth: 30,
        height: 30,
        maxHeight: 30,
        minHeight: 30,
        borderWidth: 2,
        zIndex: 3,
        overflow: 'visible',
        borderColor: colors.black,
        alignContent: 'center',
        justifyContent: 'center',
        paddingTop: 3,
      }}
    >
      {children}
    </AppText>
  )
}

function StatLabel({ children, up }: PropsWithChildren<{ up?: boolean }>) {
  return (
    <View
      style={[
        !up && {
          bottom: -95,
          left: -75,
          justifyContent: 'flex-end',
        },
        up && {
          top: 0,
          left: 9,
          justifyContent: 'flex-start',
        },
        {
          transform: [{ rotate: '-45deg' }],
          transformOrigin: 'left',
          flexDirection: 'row',
          minWidth: 140,
          position: 'absolute',
          height: 14,
          zIndex: 2,
          alignItems: 'center',
          alignContent: 'center',
          overflow: 'visible',
        },
      ]}
    >
      <AppText
        variant="heavy"
        numberOfLines={1}
        style={{
          paddingRight: up ? 5 : 22,
          paddingLeft: up ? 22 : 5,
          fontSize: 11,
          paddingTop: 1,
          textAlign: 'right',
          backgroundColor: colors.black,
          color: colors.white,
          textTransform: 'uppercase',
        }}
      >
        {children}
      </AppText>
    </View>
  )
}
