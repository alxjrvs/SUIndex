import List from './List'
import { ComponentContainer } from './ComponentContainer'
import { BaseComponentLike } from '~/rulesReferences/BaseComponentLike'
import { ComponentLike, TechLevel } from '~/rulesReferences/types'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { View } from 'react-native'
import { ComponentProps, useState } from 'react'
import { TechLevelFilter } from './TechLevelFilter'

type Props = {
  data: BaseComponentLike<ComponentLike>[]
  showTLFilter?: boolean
  headerColor?: ComponentProps<typeof ComponentContainer>['headerColor']
  tag: string
}
export function ComponentList({
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
