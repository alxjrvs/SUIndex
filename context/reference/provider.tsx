import { useEffect, useState } from 'react'
import { Ability } from '~/rulesReferences/Ability'
import { AbilityTreeRequirement } from '~/rulesReferences/AbilityTreeRequirement'
import { Equipment } from '~/rulesReferences/Equipment'
import { Keyword } from '~/rulesReferences/Keyword'
import { MechChassis } from '~/rulesReferences/MechChassis'
import { Module } from '~/rulesReferences/Module'
import { PlayerClass } from '~/rulesReferences/PlayerClass'
import { RollTable } from '~/rulesReferences/RollTable'
import { System } from '~/rulesReferences/System'
import { Trait } from '~/rulesReferences/Trait'
import ReferenceContext from './context'
import { initialState } from './initialState'

export default function ReferenceProvider(props: React.PropsWithChildren) {
  const [state, setState] = useState(initialState)
  const [complete, setComplete] = useState(false)
  useEffect(() => {
    const loadData = async () => {
      const [
        abilityTreeRequirements,
        traits,
        abilities,
        keywords,
        systems,
        modules,
        equipments,
        mechChassis,
        playerClasses,
        rollTables,
      ] = await Promise.all([
        AbilityTreeRequirement.all(),
        Trait.all(),
        Ability.all(),
        Keyword.all(),
        System.all(),
        Module.all(),
        Equipment.all(),
        MechChassis.all(),
        PlayerClass.all(),
        RollTable.all(),
      ])

      setState({
        abilityTreeRequirements:
          abilityTreeRequirements as AbilityTreeRequirement[],
        traits,
        abilities: abilities as Ability[],
        keywords,
        systems,
        modules,
        equipments,
        mechChassis,
        playerClasses,
        rollTables: rollTables as RollTable[],
      })

      setComplete(true)
    }

    loadData()
  }, [])

  if (!complete) {
    return null
  }

  return (
    <ReferenceContext.Provider value={state}>
      {props.children}
    </ReferenceContext.Provider>
  )
}
