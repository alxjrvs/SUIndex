import { FlatList, FlatListProps, View } from 'react-native'

export default function List<T = unknown>({
  data,
  renderItem,
  keyExtractor,
}: FlatListProps<T>) {
  return (
    <FlatList
      data={data}
      style={{ padding: 10, maxWidth: 1024, alignSelf: 'center' }}
      ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  )
}
