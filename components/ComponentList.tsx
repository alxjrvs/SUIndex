import List from './List'
import { ComponentContainer } from './ComponentContainer'
import { BaseComponentLike } from '~/rulesReferences/BaseComponentLike'
import { ComponentLike, TechLevel } from '~/rulesReferences/types'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Pressable, View } from 'react-native'
import { ComponentProps, useState } from 'react'
import { TechLevelDisplay } from './TechLevelDisplay'
import colors from '~/colors'

type Props = {
  data: BaseComponentLike<ComponentLike>[]
  showTLFilter?: boolean
  headerColor?: ComponentProps<typeof ComponentContainer>['headerColor']
  tag: string
}
export default function ComponentList({
  data,
  tag,
  headerColor,
  showTLFilter = false,
}: Props) {
  const { bottom } = useSafeAreaInsets()
  const [filteredTechLevel, setFilteredTechLevel] = useState<TechLevel>()

  const filteredData =
    showTLFilter && filteredTechLevel
      ? data.filter((t) => t.techLevel === filteredTechLevel)
      : data

  return (
    <>
      <TechLevelFilter
        visible={showTLFilter}
        setFilteredTechLevel={setFilteredTechLevel}
        filteredTechLevel={filteredTechLevel}
      />
      <List
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={filteredData}
        renderItem={(t) => (
          <ComponentContainer headerColor={headerColor} component={t.item} />
        )}
        keyExtractor={(t) => `${t.name}--${tag}`}
        ListFooterComponent={<View style={{ height: bottom }} />}
      />
    </>
  )
}

function TechLevelFilter({
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
