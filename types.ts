export interface ComponentLike {
  name: string
  description: string
}
export type DataValue = {
  value: string | number
  bold?: boolean
}

export interface DenseComponentLike extends ComponentLike {
  stats: DataValue[]
  techLevel: 1 | 2 | 3 | 4 | 5 | 6
  notes: string | undefined
}
