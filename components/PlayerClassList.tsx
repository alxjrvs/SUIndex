import List from './List'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { View } from 'react-native'
import { PlayerClass } from '~/rulesReferences/PlayerClass'
import { PlayerClassContainer } from './PlayerClassContainer'

type Props = {
  data: PlayerClass[]
}
export default function ComponentList({ data }: Props) {
  const { bottom } = useSafeAreaInsets()

  return (
    <List
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      data={data}
      renderItem={(t) => <PlayerClassContainer playerClass={t.item} />}
      keyExtractor={(t) => `${t.name}--player-class`}
      ListFooterComponent={<View style={{ height: bottom }} />}
    />
  )
}
