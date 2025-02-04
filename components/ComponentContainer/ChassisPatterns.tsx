import { View } from 'react-native'
import { PatternReference } from '~/context/reference/models/types'
import { AppText } from '../AppText'
import { capitalizeFirstLetter, collapseMultiples } from '~/utils/formatters'
import { CollapsibleInfoRow } from '../CollapsibleInfoRow'
import colors from '~/colors'
import { ReferencableComponentType } from '~/types'
import ReferenceLink from '../ReferenceLink'

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
        <PatternSection type="system" systemModules={pattern.systems} />
        <PatternSection type="module" systemModules={pattern.modules} />
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
              type="system"
              systemModules={pattern.drone.systems}
            />
            <PatternSection
              type="module"
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
  type,
}: {
  type: ReferencableComponentType
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
        style={{ textDecorationLine: 'underline', fontSize: 18 }}
        variant="bold"
      >
        {capitalizeFirstLetter(type)}s
      </AppText>
      {collapsed.map((system, i) => {
        const cleanSystem = system.replace(/[xX]\d+/, '')

        return (
          <ReferenceLink type={type} name={cleanSystem} key={i}>
            <AppText>{system}</AppText>
          </ReferenceLink>
        )
      })}
    </View>
  )
}
