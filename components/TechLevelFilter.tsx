import { View, Pressable } from 'react-native'
import colors from '~/colors'
import { TechLevel } from '~/context/reference/models/types'
import { TechLevelDisplay } from './TechLevelDisplay'

export function TechLevelFilter({
  setFilteredTechLevel,
  filteredTechLevel,
  visible,
}: {
  filteredTechLevel: TechLevel
  setFilteredTechLevel: (tl: TechLevel) => void
  visible: boolean
}) {
  if (!visible) return null
  return (
    <View
      style={{
        backgroundColor: colors.SUBlue,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
      }}
    >
      <Pressable onPress={() => setFilteredTechLevel(undefined)}>
        <TechLevelDisplay
          invert={filteredTechLevel !== undefined}
          label="ALL"
          techLevel={undefined}
        />
      </Pressable>
      {TechLevels.map((tl) => (
        <Pressable
          key={`tlFilter-${tl}`}
          onPress={() => setFilteredTechLevel(tl)}
        >
          <TechLevelDisplay invert={filteredTechLevel !== tl} techLevel={tl} />
        </Pressable>
      ))}
    </View>
  )
}

const TechLevels = [1, 2, 3, 4, 5, 6] as TechLevel[]
