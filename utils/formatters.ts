import { act } from 'react'
import { ActionData } from '~/rulesReferences/types'
import { DataValue } from '~/types'

type Data = Partial<ActionData> & { activationCurrency: string }

export function generateDataListValues(data: Data): DataValue[] {
  const details: DataValue[] = []

  const activationCost = formatActivationCost(data)
  activationCost && details.push({ value: activationCost, cost: true })

  const actionType = formatActionType(data)
  actionType && details.push({ value: actionType })

  const range = formatRange(data)
  range && details.push({ value: range })

  const damage = formatDamage(data)
  damage && details.push({ value: damage })

  const traits = formattedTraits(data)
  traits &&
    traits.forEach((t) => {
      details.push({ value: t })
    })

  return details
}

function formatActivationCost({
  activationCost,
  activationCurrency,
}: Pick<Data, 'activationCost' | 'activationCurrency'>) {
  if (activationCost === undefined) return undefined
  return `${String(activationCost).toLowerCase() === 'variable' ? 'X' : activationCost}${activationCurrency}`
}

function formatActionType({ actionType }: Pick<Data, 'actionType'>) {
  if (actionType === undefined) return undefined
  if (actionType.includes('action')) {
    return actionType
  }
  return `${actionType} Action`
}

function formatRange({ range }: Pick<Data, 'range'>) {
  if (range === undefined) return undefined
  return `Range:${range}`
}

function formatDamage({ damage }: Pick<Data, 'damage'>) {
  if (!damage) return undefined
  return `Damage:${damage.amount}${damage.type}`
}

function formattedTraits({ traits }: Pick<Data, 'traits'>) {
  if (!traits) return undefined
  return traits.map((t) => {
    return `${t.type.trimEnd()}${t.amount !== undefined ? `(${t.amount})` : ''}`
  })
}
