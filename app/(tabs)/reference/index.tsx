import { Link } from 'expo-router'
import { Pressable, StyleSheet, View } from 'react-native'
import colors from '~/colors'
import { AppText } from '~/components/AppText'

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        paddingHorizontal: 5,
        backgroundColor: colors.SUBlue,
      }}
    >
      <AppText style={styles.header}>Player Reference</AppText>
      <View style={{ flexDirection: 'row', gap: 5 }}>
        <Link href="/(tabs)/reference/corePlayerClasses" asChild>
          <Pressable style={styles.button}>
            <AppText style={styles.linkText}>Core Player Classes</AppText>
          </Pressable>
        </Link>
        <Link href="/(tabs)/reference/corePlayerClasses" asChild>
          <Pressable style={styles.button}>
            <AppText style={styles.linkText}>Advanced Player Classes</AppText>
          </Pressable>
        </Link>
        <Link href="/(tabs)/reference/equipments" asChild>
          <Pressable style={styles.button}>
            <AppText style={styles.linkText}>Pilot Equipment</AppText>
          </Pressable>
        </Link>
      </View>
      <AppText style={styles.header}>Mech Reference</AppText>
      <View style={{ flexDirection: 'row', gap: 5 }}>
        <Link href="/(tabs)/reference/mechChassis" asChild>
          <Pressable style={styles.button}>
            <AppText style={styles.linkText}>Mech Chassis</AppText>
          </Pressable>
        </Link>
        <Link href="/(tabs)/reference/systems" asChild>
          <Pressable style={styles.button}>
            <AppText style={styles.linkText}>Systems</AppText>
          </Pressable>
        </Link>
        <Link href="/(tabs)/reference/modules" asChild>
          <Pressable style={styles.button}>
            <AppText style={styles.linkText}>Modules</AppText>
          </Pressable>
        </Link>
      </View>
      <AppText style={styles.header}>Rules Reference</AppText>
      <View style={{ flexDirection: 'row', gap: 5 }}>
        <Link href="/(tabs)/reference/crawlerTypes" asChild>
          <Pressable style={styles.button}>
            <AppText style={styles.linkText}>Crawler Types</AppText>
          </Pressable>
        </Link>
        <Link href="/(tabs)/reference/rollTables" asChild>
          <Pressable style={styles.button}>
            <AppText style={styles.linkText}>Roll Tables</AppText>
          </Pressable>
        </Link>
      </View>
      <View style={{ flexDirection: 'row', gap: 5 }}>
        <Link href="/(tabs)/reference/traits" asChild>
          <Pressable style={styles.button}>
            <AppText style={styles.linkText}>Traits</AppText>
          </Pressable>
        </Link>
        <Link href="/(tabs)/reference/keywords" asChild>
          <Pressable style={styles.button}>
            <AppText style={styles.linkText}>Keywords</AppText>
          </Pressable>
        </Link>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  linkText: {
    textAlign: 'center',
  },
  button: {
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    backgroundColor: colors.white,
    borderColor: colors.black,
    padding: 10,
    flex: 1,
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    color: colors.white,
    textAlign: 'center',
    width: '100%',
    backgroundColor: colors.SUFiveBlue,
  },
})
