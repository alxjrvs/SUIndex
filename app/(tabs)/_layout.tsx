import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Tabs } from 'expo-router'

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }} initialRouteName="index">
      <Tabs.Screen
        name="index"
        options={{
          title: 'Reference',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="book" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="myUnion"
        options={{
          title: 'My Union',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="gear" color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
