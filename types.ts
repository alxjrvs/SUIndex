export type ReferencableComponentType = 'trait' | 'module' | 'system'
export type DataValue = {
  value: string | number
  cost?: boolean
  type?: ReferencableComponentType
}
