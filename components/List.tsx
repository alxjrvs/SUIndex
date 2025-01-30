import { FlatList, FlatListProps, Platform, View } from 'react-native'

export default function List<T = unknown>(props: FlatListProps<T>) {
  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      {...props}
      style={[
        {
          alignSelf: 'center',
          width: Platform.select({ web: '50%', ios: '100%', android: '100%' }),
          paddingHorizontal: 10,
        },
        props.style,
      ]}
    />
  )
}
