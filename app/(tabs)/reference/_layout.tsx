import Drawer from 'expo-router/drawer'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import colors from '~/colors'

export default function ReferenceRoot() {
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: colors.SUBlue }}>
      <Drawer screenOptions={{ headerStyle: { borderBottomWidth: 0 } }}>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Home',
            title: 'Salvage Union Reference',
          }}
        />
        <Drawer.Screen
          name="equipments"
          options={{
            drawerLabel: 'Equipment',
            title: 'Equipment',
          }}
        />
        <Drawer.Screen
          name="systems"
          options={{
            drawerLabel: 'Systems',
            title: 'Systems',
          }}
        />
        <Drawer.Screen
          name="modules"
          options={{
            drawerLabel: 'Modules',
            title: 'Modules',
          }}
        />
        <Drawer.Screen
          name="corePlayerClasses"
          options={{
            drawerLabel: 'Core Player Classes',
            title: 'Core Player Classes',
          }}
        />
        <Drawer.Screen
          name="advancedPlayerClasses"
          options={{
            drawerLabel: 'Advanced Player Classes',
            title: 'Advanced Player Classes',
          }}
        />
        <Drawer.Screen
          name="crawlerTypes"
          options={{
            drawerLabel: 'Crawler Types',
            title: 'Crawler Types',
          }}
        />
        <Drawer.Screen
          name="mechChassis"
          options={{
            drawerLabel: 'Mech Chassis',
            title: 'Mech Chassis',
          }}
        />
        <Drawer.Screen
          name="rollTables"
          options={{
            drawerLabel: 'Roll tables',
            title: 'Roll Tables',
          }}
        />
        <Drawer.Screen
          name="keywords"
          options={{
            drawerLabel: 'Keywords',
            title: 'Keywords',
          }}
        />
        <Drawer.Screen
          name="traits"
          options={{
            drawerLabel: 'Traits',
            title: 'Traits',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  )
}
