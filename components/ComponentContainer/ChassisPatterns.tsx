import { View } from 'react-native'
import { PatternReference } from '~/rulesReferences/types'
import { AppText } from '../AppText'
import { collapseMultiples } from '~/utils/formatters'
import { CollapsibleInfoRow } from '../CollapsibleInfoRow'
import colors from '~/colors'

type Props = {
  patterns: PatternReference[]
}
export function ChassisPatterns({ patterns }: Props) {
  return (
    <View style={{ gap: 10 }}>
      {patterns.map((pattern, i) => (
        <ChassisPattern key={i} pattern={pattern} />
      ))}
    </View>
  )
}

function ChassisPattern({ pattern }: { pattern: PatternReference }) {
  return (
    <CollapsibleInfoRow
      header={pattern.name}
      headerColor={colors.SUMilitaryGreen}
      textColor={colors.white}
    >
      <AppText
        style={{
          backgroundColor: colors.SUOrange,
          padding: 10,
          alignContent: 'center',
        }}
      >
        {pattern.description}
      </AppText>
      <View style={{ flexDirection: 'row' }}>
        <PatternSection title="Systems" systemModules={pattern.systems} />
        <PatternSection title="Modules" systemModules={pattern.modules} />
      </View>
      {pattern.drone && (
        <>
          <AppText
            variant="bold"
            style={{
              backgroundColor: colors.SUOrange,
              textAlign: 'center',
              fontSize: 16,
            }}
          >
            Drone
          </AppText>
          <View style={{ flexDirection: 'row' }}>
            <PatternSection
              title="Systems"
              systemModules={pattern.drone.systems}
            />
            <PatternSection
              title="Modules"
              systemModules={pattern.drone.modules}
            />
          </View>
        </>
      )}
      {pattern.legalStarting && (
        <AppText
          variant="heavy"
          style={{
            backgroundColor: colors.SUOneBlue,
            padding: 10,
            fontSize: 16,
          }}
        >
          This Pattern is a legal Tech 1 build for a starting Mech if you are
          new to the game.
        </AppText>
      )}
    </CollapsibleInfoRow>
  )
}

function PatternSection({
  systemModules,
  title,
}: {
  title: string
  systemModules: string[]
}) {
  const collapsed = collapseMultiples(systemModules)
  return (
    <View
      style={{
        paddingVertical: 10,
        flexDirection: 'column',
        gap: 5,
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.SULightOrange,
      }}
    >
      <AppText
        style={{ textDecorationLine: 'underline', fontSize: 16 }}
        variant="bold"
      >
        {title}
      </AppText>
      {collapsed.map((system, i) => (
        <AppText key={i}>{system}</AppText>
      ))}
    </View>
  )
}
