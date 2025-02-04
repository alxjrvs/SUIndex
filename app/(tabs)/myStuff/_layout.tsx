import Drawer from 'expo-router/drawer'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import colors from '~/colors'
import UserDataProvider from '~/context/userData/provider'

export default function MyStuffLayout() {
  return (
    <UserDataProvider>
      <GestureHandlerRootView
        style={{ flex: 1, backgroundColor: colors.SUBlue }}
      >
        <Drawer screenOptions={{ headerStyle: { borderBottomWidth: 0 } }}>
          <Drawer.Screen
            name="index"
            options={{
              drawerLabel: 'Home',
              title: 'My Stuff',
            }}
          />
          <Drawer.Screen
            name="myCrawlers"
            options={{
              drawerLabel: 'My Crawlers',
              title: 'My Crawlers',
            }}
          />
          <Drawer.Screen
            name="myMechs"
            options={{
              drawerLabel: 'My Mechs',
              title: 'My Mechs',
            }}
          />
          <Drawer.Screen
            name="myPilots"
            options={{
              drawerLabel: 'My Pilots',
              title: 'My Pilots',
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </UserDataProvider>
  )
}
