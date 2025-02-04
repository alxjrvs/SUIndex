import { useEffect, useState } from 'react'
import { Ability } from '~/context/reference/models/Ability'
import { AbilityTreeRequirement } from '~/context/reference/models/AbilityTreeRequirement'
import { Equipment } from '~/context/reference/models/Equipment'
import { Keyword } from '~/context/reference/models/Keyword'
import { MechChassis } from '~/context/reference/models/MechChassis'
import { Module } from '~/context/reference/models/Module'
import { PlayerClass } from '~/context/reference/models/PlayerClass'
import { RollTable } from '~/context/reference/models/RollTable'
import { System } from '~/context/reference/models/System'
import { Trait } from '~/context/reference/models/Trait'
import ReferenceContext from './context'
import { initialState } from './initialState'
import { CrawlerType } from '~/context/reference/models/CrawlerType'

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
        rollTables,
        crawlerTypes,
      ] = await Promise.all([
        AbilityTreeRequirement.all(),
        Trait.all(),
        Ability.all(),
        Keyword.all(),
        System.all(),
        Module.all(),
        Equipment.all(),
        MechChassis.all(),
        RollTable.all(),
        CrawlerType.all(),
      ])
      const playerClasses = await PlayerClass.allHydrated(
        abilities as Ability[]
      )

      setState({
        abilityTreeRequirements:
          abilityTreeRequirements as AbilityTreeRequirement[],
        traits: traits as Trait[],
        abilities: abilities as Ability[],
        crawlerTypes,
        keywords: keywords as Keyword[],
        systems,
        modules,
        equipments,
        mechChassis: mechChassis as MechChassis[],
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
