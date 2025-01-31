import { View } from 'react-native'
import colors from '~/colors'
import { AppText } from '../AppText'
import { TechLevel } from '~/rulesReferences/types'
import { ChassisStats as Stats } from '~/rulesReferences/types'
import { PropsWithChildren } from 'react'

type Props = {
  stats: Stats | undefined
  up?: boolean
}

export function ChassisStats({ stats, up = false }: Props) {
  if (!stats) return null

  return (
    <View>
      {!up && stats.notes && <AppText variant="bold">{stats.notes}</AppText>}
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
        <Stat up={up} label="Structure Pts." value={stats.structure_pts} />
        <Stat up={up} label="Energy Pts." value={stats.energy_pts} />
        <Stat up={up} label="Heat Cap." value={stats.heat_cap} />
        <Stat up={up} label="System Slots" value={stats.system_slots} />
        <Stat up={up} label="Module Slots" value={stats.module_slots} />
        <Stat up={up} label="Cargo Cap." value={stats.cargo_cap} />
        <Stat up={up} label="Tech Level" value={stats.tech_level} />
        <Stat up={up} label="Salvage Value" value={stats.salvage_value} />
      </View>
      {up && stats.notes && <AppText variant="bold">{stats.notes}</AppText>}
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
