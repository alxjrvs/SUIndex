import { FlatList, FlatListProps, Platform, View } from 'react-native'

export default function List<T = unknown>(props: FlatListProps<T>) {
  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      {...props}
      style={[
        {
          alignSelf: 'center',
          maxWidth: Platform.select({
            web: 1024 as unknown as '100%',
            default: '100%',
          }),
          minWidth: Platform.select({
            web: undefined,
            default: '100%',
          }),
          paddingHorizontal: 10,
        },
        props.style,
      ]}
    />
  )
}
