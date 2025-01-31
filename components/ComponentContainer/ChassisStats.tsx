import { View } from 'react-native'
import colors from '~/colors'
import { AppText } from '../AppText'
import { TechLevel } from '~/rulesReferences/types'
import { ChassisStats as Stats } from '~/rulesReferences/types'

type Props = {
  stats: Stats | undefined
}

export function ChassisStats({ stats }: Props) {
  if (!stats) return null
  return (
    <View
      style={{
        paddingTop: 50,
        overflow: 'visible',
        minWidth: 130,
      }}
    >
      <Stat label="Structure Pts." value={stats.structure_pts} />
      <Stat label="Energy Pts." value={stats.energy_pts} />
      <Stat label="Heat Cap." value={stats.heat_cap} />
      <Stat label="System Slots" value={stats.system_slots} />
      <Stat label="Module Slots" value={stats.module_slots} />
      <Stat label="Cargo Cap." value={stats.cargo_cap} />
      <Stat label="Tech Level" value={stats.tech_level} />
      <Stat label="Salvage Value" value={stats.salvage_value} />
    </View>
  )
}

function Stat({
  label,
  value,
}: {
  label: string
  value: number | string | TechLevel
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        overflow: 'visible',
      }}
    >
      <AppText
        variant="heavy"
        style={{
          height: 14,
          fontSize: 12,
          right: -10,
          top: 5,
          zIndex: 2,
          backgroundColor: colors.black,
          alignItems: 'center',
          alignContent: 'center',
          color: colors.white,
          textTransform: 'uppercase',
          transformOrigin: 'right',
          overflow: 'visible',
          paddingLeft: 5,
          paddingRight: 15,
          transform: [{ rotate: '30deg' }],
        }}
      >
        {label}
      </AppText>
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
          borderColor: colors.black,
          alignContent: 'center',
          justifyContent: 'center',
          paddingTop: 3,
        }}
      >
        {value}
      </AppText>
    </View>
  )
}
