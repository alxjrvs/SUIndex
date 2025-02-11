import { ChassisStats as Stats } from '~/context/reference/models/types'
import { StatList } from '../StatList'

type Props = {
  stats: Stats | undefined
  up?: boolean
}

export function ChassisStats({ stats, up = false }: Props) {
  if (!stats) return null

  return (
    <StatList
      stats={[
        { label: 'Structure Pts.', value: stats.structure_pts },
        { label: 'Energy Pts.', value: stats.energy_pts },
        { label: 'Heat Cap.', value: stats.heat_cap },
        { label: 'System Slots', value: stats.system_slots },
        { label: 'Module Slots', value: stats.module_slots },
        { label: 'Cargo Cap.', value: stats.cargo_cap },
        { label: 'Tech Level', value: stats.tech_level },
        { label: 'Salvage Value', value: stats.salvage_value },
      ]}
      notes={stats.notes}
      up={up}
    />
  )
}
