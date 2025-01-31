import { View } from 'react-native'
import colors from '~/colors'
import { AppText } from '../AppText'
import { TechLevel } from '~/rulesReferences/types'
import { ChassisStats as Stats } from '~/rulesReferences/types'
import { PropsWithChildren } from 'react'

type Position = 'up' | 'down'
type Props = {
  stats: Stats | undefined
  up?: boolean
}

export function ChassisStats({ stats, up = false }: Props) {
  if (!stats) return null

  return (
    <View
      style={[
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
      <StatLabel up={up}>{label}</StatLabel>
      <StatValue>{value}</StatValue>
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
          top: 14,
          transform: [{ rotate: '45deg' }],
        },
        up && {
          top: 0,
          transform: [{ rotate: '-45deg' }],
        },
        {
          left: 9,
          position: 'absolute',
          height: 14,
          backgroundColor: colors.black,
          zIndex: 2,
          transformOrigin: 'left',
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
          fontSize: 11,
          paddingTop: 1,
          backgroundColor: colors.black,
          color: colors.white,
          textTransform: 'uppercase',
          paddingRight: 5,
          paddingLeft: 22,
        }}
      >
        {children}
      </AppText>
    </View>
  )
}
