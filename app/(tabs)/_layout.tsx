import { Tabs } from 'expo-router'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import colors from '~/colors'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.SUOrange,
        tabBarStyle: { borderTopWidth: 0 },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="reference"
        options={{
          title: 'Reference',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              size={28}
              name="book-open-blank-variant"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="myStuff"
        options={{
          title: 'My Stuff',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              size={28}
              name="robot-excited"
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  )
}
