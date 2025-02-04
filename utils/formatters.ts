import { ComponentLikeData } from '~/context/reference/models/types'
import { DataValue } from '~/types'

type Data = Partial<ComponentLikeData> & { activationCurrency: string }

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
      details.push({ value: t, type: 'trait' })
    })

  !!data.recommended && details.push({ value: 'Recommended' })

  return details
}

export function formatActivationCost({
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
    const type = capitalizeFirstLetter(t.type.trimEnd())
    const amount = t.amount !== undefined ? `(${t.amount})` : ''
    return `${type}${amount}`
  })
}

export function capitalizeFirstLetter(val: string) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1)
}

export function collapseMultiples(list: string[]): string[] {
  if (list.length === 0) return []

  const result: string[] = []
  let current = list[0]
  let count = 1

  for (let i = 1; i < list.length; i++) {
    if (list[i] === current) {
      count++
    } else {
      result.push(count > 1 ? `${current} x${count}` : current)
      current = list[i]
      count = 1
    }
  }

  result.push(count > 1 ? `${current} x${count}` : current)
  return result
}
