import { useEffect, useState } from 'react'
import { Ability } from '~/rulesReferences/ability'
import { AbilityTreeRequirement } from '~/rulesReferences/abilityTreeRequirement'
import { Equipment } from '~/rulesReferences/equipment'
import { Keyword } from '~/rulesReferences/keyword'
import { MechChassis } from '~/rulesReferences/mechChassis'
import { Module } from '~/rulesReferences/module'
import { PlayerClass } from '~/rulesReferences/playerClass'
import { RollTable } from '~/rulesReferences/rollTable'
import { System } from '~/rulesReferences/system'
import { Trait } from '~/rulesReferences/trait'
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
